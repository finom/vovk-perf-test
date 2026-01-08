import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cpa")
export default class CpaController {
  @operation({
    summary: "Get Cpa",
  })
  @get()
  static getCpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpa",
  })
  @post("{id}")
  static createCpa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
