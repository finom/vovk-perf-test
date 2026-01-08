import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hll")
export default class HllController {
  @operation({
    summary: "Get Hll",
  })
  @get()
  static getHll = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hll",
  })
  @post("{id}")
  static createHll = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
