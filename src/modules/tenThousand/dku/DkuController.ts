import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dku")
export default class DkuController {
  @operation({
    summary: "Get Dku",
  })
  @get()
  static getDku = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dku",
  })
  @post("{id}")
  static createDku = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
