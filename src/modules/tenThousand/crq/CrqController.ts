import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crq")
export default class CrqController {
  @operation({
    summary: "Get Crq",
  })
  @get()
  static getCrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crq",
  })
  @post("{id}")
  static createCrq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
