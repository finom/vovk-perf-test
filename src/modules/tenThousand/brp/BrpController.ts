import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("brp")
export default class BrpController {
  @operation({
    summary: "Get Brp",
  })
  @get()
  static getBrp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Brp",
  })
  @post("{id}")
  static createBrp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
