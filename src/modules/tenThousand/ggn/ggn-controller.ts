import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ggn")
export default class GgnController {
  @operation({
    summary: "Get Ggn",
  })
  @get()
  static getGgn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ggn",
  })
  @post("{id}")
  static createGgn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
