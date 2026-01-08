import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("tt")
export default class TtController {
  @operation({
    summary: "Get Tt",
  })
  @get()
  static getTt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Tt",
  })
  @post("{id}")
  static createTt = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
