import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lve")
export default class LveController {
  @operation({
    summary: "Get Lve",
  })
  @get()
  static getLve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lve",
  })
  @post("{id}")
  static createLve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
