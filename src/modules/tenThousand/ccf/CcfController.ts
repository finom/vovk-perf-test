import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccf")
export default class CcfController {
  @operation({
    summary: "Get Ccf",
  })
  @get()
  static getCcf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccf",
  })
  @post("{id}")
  static createCcf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
