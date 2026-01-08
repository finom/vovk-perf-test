import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mzl")
export default class MzlController {
  @operation({
    summary: "Get Mzl",
  })
  @get()
  static getMzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mzl",
  })
  @post("{id}")
  static createMzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
