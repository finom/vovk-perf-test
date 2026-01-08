import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dfl")
export default class DflController {
  @operation({
    summary: "Get Dfl",
  })
  @get()
  static getDfl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dfl",
  })
  @post("{id}")
  static createDfl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
