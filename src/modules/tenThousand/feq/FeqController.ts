import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("feq")
export default class FeqController {
  @operation({
    summary: "Get Feq",
  })
  @get()
  static getFeq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feq",
  })
  @post("{id}")
  static createFeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
