import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cjs")
export default class CjsController {
  @operation({
    summary: "Get Cjs",
  })
  @get()
  static getCjs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjs",
  })
  @post("{id}")
  static createCjs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
