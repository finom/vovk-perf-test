import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzf")
export default class DzfController {
  @operation({
    summary: "Get Dzf",
  })
  @get()
  static getDzf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzf",
  })
  @post("{id}")
  static createDzf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
