import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ml")
export default class MlController {
  @operation({
    summary: "Get Ml",
  })
  @get()
  static getMl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ml",
  })
  @post("{id}")
  static createMl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
