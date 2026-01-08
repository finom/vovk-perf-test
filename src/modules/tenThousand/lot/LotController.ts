import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lot")
export default class LotController {
  @operation({
    summary: "Get Lot",
  })
  @get()
  static getLot = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lot",
  })
  @post("{id}")
  static createLot = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
