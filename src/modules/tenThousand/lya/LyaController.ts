import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lya")
export default class LyaController {
  @operation({
    summary: "Get Lya",
  })
  @get()
  static getLya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lya",
  })
  @post("{id}")
  static createLya = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
