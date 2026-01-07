import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lsh")
export default class LshController {
  @operation({
    summary: "Get Lsh",
  })
  @get()
  static getLsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lsh",
  })
  @post("{id}")
  static createLsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
