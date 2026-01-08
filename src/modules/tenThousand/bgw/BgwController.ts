import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bgw")
export default class BgwController {
  @operation({
    summary: "Get Bgw",
  })
  @get()
  static getBgw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bgw",
  })
  @post("{id}")
  static createBgw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
