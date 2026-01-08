import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moa")
export default class MoaController {
  @operation({
    summary: "Get Moa",
  })
  @get()
  static getMoa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Moa",
  })
  @post("{id}")
  static createMoa = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
