import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzr")
export default class DzrController {
  @operation({
    summary: "Get Dzr",
  })
  @get()
  static getDzr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dzr",
  })
  @post("{id}")
  static createDzr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
