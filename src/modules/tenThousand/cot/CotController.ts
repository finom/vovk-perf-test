import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cot")
export default class CotController {
  @operation({
    summary: "Get Cot",
  })
  @get()
  static getCot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cot",
  })
  @post("{id}")
  static createCot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
