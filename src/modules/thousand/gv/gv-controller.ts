import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gv")
export default class GvController {
  @operation({
    summary: "Get Gv",
  })
  @get()
  static getGv = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gv",
  })
  @post("{id}")
  static createGv = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
