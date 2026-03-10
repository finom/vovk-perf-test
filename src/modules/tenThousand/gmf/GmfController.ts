import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gmf")
export default class GmfController {
  @operation({
    summary: "Get Gmf",
  })
  @get()
  static getGmf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gmf",
  })
  @post("{id}")
  static createGmf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
