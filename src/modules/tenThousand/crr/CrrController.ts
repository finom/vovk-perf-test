import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crr")
export default class CrrController {
  @operation({
    summary: "Get Crr",
  })
  @get()
  static getCrr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crr",
  })
  @post("{id}")
  static createCrr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
