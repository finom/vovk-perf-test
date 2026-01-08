import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crh")
export default class CrhController {
  @operation({
    summary: "Get Crh",
  })
  @get()
  static getCrh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crh",
  })
  @post("{id}")
  static createCrh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
