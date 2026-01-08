import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fwy")
export default class FwyController {
  @operation({
    summary: "Get Fwy",
  })
  @get()
  static getFwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwy",
  })
  @post("{id}")
  static createFwy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
