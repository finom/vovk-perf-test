import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvy")
export default class FvyController {
  @operation({
    summary: "Get Fvy",
  })
  @get()
  static getFvy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvy",
  })
  @post("{id}")
  static createFvy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
