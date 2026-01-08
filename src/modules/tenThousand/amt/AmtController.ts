import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amt")
export default class AmtController {
  @operation({
    summary: "Get Amt",
  })
  @get()
  static getAmt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amt",
  })
  @post("{id}")
  static createAmt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
