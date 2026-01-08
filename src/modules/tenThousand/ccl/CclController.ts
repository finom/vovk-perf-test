import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccl")
export default class CclController {
  @operation({
    summary: "Get Ccl",
  })
  @get()
  static getCcl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccl",
  })
  @post("{id}")
  static createCcl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
