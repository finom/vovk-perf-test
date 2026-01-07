import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lff")
export default class LffController {
  @operation({
    summary: "Get Lff",
  })
  @get()
  static getLff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lff",
  })
  @post("{id}")
  static createLff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
