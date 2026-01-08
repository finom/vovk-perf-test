import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jsy")
export default class JsyController {
  @operation({
    summary: "Get Jsy",
  })
  @get()
  static getJsy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jsy",
  })
  @post("{id}")
  static createJsy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
