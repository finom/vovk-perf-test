import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bqa")
export default class BqaController {
  @operation({
    summary: "Get Bqa",
  })
  @get()
  static getBqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bqa",
  })
  @post("{id}")
  static createBqa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
