import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aot")
export default class AotController {
  @operation({
    summary: "Get Aot",
  })
  @get()
  static getAot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aot",
  })
  @post("{id}")
  static createAot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
