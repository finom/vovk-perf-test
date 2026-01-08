import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("js")
export default class JsController {
  @operation({
    summary: "Get Js",
  })
  @get()
  static getJs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Js",
  })
  @post("{id}")
  static createJs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
