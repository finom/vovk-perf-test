import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ltc")
export default class LtcController {
  @operation({
    summary: "Get Ltc",
  })
  @get()
  static getLtc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ltc",
  })
  @post("{id}")
  static createLtc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
