import { procedure, prefix, get, post, operation } from "vovk";

@prefix("lwf")
export default class LwfController {
  @operation({
    summary: "Get Lwf",
  })
  @get()
  static getLwf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lwf",
  })
  @post("{id}")
  static createLwf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
