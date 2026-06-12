import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gvf")
export default class GvfController {
  @operation({
    summary: "Get Gvf",
  })
  @get()
  static getGvf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gvf",
  })
  @post("{id}")
  static createGvf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
