import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gwl")
export default class GwlController {
  @operation({
    summary: "Get Gwl",
  })
  @get()
  static getGwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwl",
  })
  @post("{id}")
  static createGwl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
