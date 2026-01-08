import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mvu")
export default class MvuController {
  @operation({
    summary: "Get Mvu",
  })
  @get()
  static getMvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mvu",
  })
  @post("{id}")
  static createMvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
