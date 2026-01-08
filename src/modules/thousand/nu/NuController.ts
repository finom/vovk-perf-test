import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("nu")
export default class NuController {
  @operation({
    summary: "Get Nu",
  })
  @get()
  static getNu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nu",
  })
  @post("{id}")
  static createNu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
