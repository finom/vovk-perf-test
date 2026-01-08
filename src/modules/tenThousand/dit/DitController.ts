import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dit")
export default class DitController {
  @operation({
    summary: "Get Dit",
  })
  @get()
  static getDit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dit",
  })
  @post("{id}")
  static createDit = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
