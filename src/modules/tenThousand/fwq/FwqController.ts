import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwq")
export default class FwqController {
  @operation({
    summary: "Get Fwq",
  })
  @get()
  static getFwq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwq",
  })
  @post("{id}")
  static createFwq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
