import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mma")
export default class MmaController {
  @operation({
    summary: "Get Mma",
  })
  @get()
  static getMma = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mma",
  })
  @post("{id}")
  static createMma = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
