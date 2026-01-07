import { procedure, prefix, get, post, operation } from "vovk";

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
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
