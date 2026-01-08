import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzm")
export default class DzmController {
  @operation({
    summary: "Get Dzm",
  })
  @get()
  static getDzm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzm",
  })
  @post("{id}")
  static createDzm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
