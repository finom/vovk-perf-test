import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ba")
export default class BaController {
  @operation({
    summary: "Get Ba",
  })
  @get()
  static getBa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ba",
  })
  @post("{id}")
  static createBa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
