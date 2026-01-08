import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lkl")
export default class LklController {
  @operation({
    summary: "Get Lkl",
  })
  @get()
  static getLkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lkl",
  })
  @post("{id}")
  static createLkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
