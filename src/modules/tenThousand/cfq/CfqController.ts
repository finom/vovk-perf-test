import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cfq")
export default class CfqController {
  @operation({
    summary: "Get Cfq",
  })
  @get()
  static getCfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cfq",
  })
  @post("{id}")
  static createCfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
