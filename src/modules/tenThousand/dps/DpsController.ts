import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dps")
export default class DpsController {
  @operation({
    summary: "Get Dps",
  })
  @get()
  static getDps = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dps",
  })
  @post("{id}")
  static createDps = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
