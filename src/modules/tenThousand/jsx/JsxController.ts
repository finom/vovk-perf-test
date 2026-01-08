import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsx")
export default class JsxController {
  @operation({
    summary: "Get Jsx",
  })
  @get()
  static getJsx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsx",
  })
  @post("{id}")
  static createJsx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
