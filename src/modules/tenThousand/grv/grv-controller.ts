import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("grv")
export default class GrvController {
  @operation({
    summary: "Get Grv",
  })
  @get()
  static getGrv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Grv",
  })
  @post("{id}")
  static createGrv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
