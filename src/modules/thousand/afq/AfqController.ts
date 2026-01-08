import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("afq")
export default class AfqController {
  @operation({
    summary: "Get Afq",
  })
  @get()
  static getAfq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Afq",
  })
  @post("{id}")
  static createAfq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
