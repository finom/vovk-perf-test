import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsb")
export default class JsbController {
  @operation({
    summary: "Get Jsb",
  })
  @get()
  static getJsb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsb",
  })
  @post("{id}")
  static createJsb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
