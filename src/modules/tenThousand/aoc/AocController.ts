import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aoc")
export default class AocController {
  @operation({
    summary: "Get Aoc",
  })
  @get()
  static getAoc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aoc",
  })
  @post("{id}")
  static createAoc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
