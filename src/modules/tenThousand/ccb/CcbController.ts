import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccb")
export default class CcbController {
  @operation({
    summary: "Get Ccb",
  })
  @get()
  static getCcb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccb",
  })
  @post("{id}")
  static createCcb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
