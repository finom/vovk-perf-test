import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("crg")
export default class CrgController {
  @operation({
    summary: "Get Crg",
  })
  @get()
  static getCrg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Crg",
  })
  @post("{id}")
  static createCrg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
