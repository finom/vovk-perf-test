import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwb")
export default class LwbController {
  @operation({
    summary: "Get Lwb",
  })
  @get()
  static getLwb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwb",
  })
  @post("{id}")
  static createLwb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
