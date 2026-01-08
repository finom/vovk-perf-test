import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ljl")
export default class LjlController {
  @operation({
    summary: "Get Ljl",
  })
  @get()
  static getLjl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ljl",
  })
  @post("{id}")
  static createLjl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
