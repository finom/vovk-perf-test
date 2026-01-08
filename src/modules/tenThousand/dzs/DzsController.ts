import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzs")
export default class DzsController {
  @operation({
    summary: "Get Dzs",
  })
  @get()
  static getDzs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzs",
  })
  @post("{id}")
  static createDzs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
