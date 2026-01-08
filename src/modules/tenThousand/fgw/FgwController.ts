import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fgw")
export default class FgwController {
  @operation({
    summary: "Get Fgw",
  })
  @get()
  static getFgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgw",
  })
  @post("{id}")
  static createFgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
