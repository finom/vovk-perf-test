import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("clz")
export default class ClzController {
  @operation({
    summary: "Get Clz",
  })
  @get()
  static getClz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Clz",
  })
  @post("{id}")
  static createClz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
