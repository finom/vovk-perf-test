import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwu")
export default class FwuController {
  @operation({
    summary: "Get Fwu",
  })
  @get()
  static getFwu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwu",
  })
  @post("{id}")
  static createFwu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
