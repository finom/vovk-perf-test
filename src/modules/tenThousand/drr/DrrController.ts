import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("drr")
export default class DrrController {
  @operation({
    summary: "Get Drr",
  })
  @get()
  static getDrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drr",
  })
  @post("{id}")
  static createDrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
