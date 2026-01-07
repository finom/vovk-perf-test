import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwz")
export default class LwzController {
  @operation({
    summary: "Get Lwz",
  })
  @get()
  static getLwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwz",
  })
  @post("{id}")
  static createLwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
