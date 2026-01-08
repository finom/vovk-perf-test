import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czl")
export default class CzlController {
  @operation({
    summary: "Get Czl",
  })
  @get()
  static getCzl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czl",
  })
  @post("{id}")
  static createCzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
