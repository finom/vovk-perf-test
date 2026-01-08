import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ccy")
export default class CcyController {
  @operation({
    summary: "Get Ccy",
  })
  @get()
  static getCcy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ccy",
  })
  @post("{id}")
  static createCcy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
