import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mit")
export default class MitController {
  @operation({
    summary: "Get Mit",
  })
  @get()
  static getMit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mit",
  })
  @post("{id}")
  static createMit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
