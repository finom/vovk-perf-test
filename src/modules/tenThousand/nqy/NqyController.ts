import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqy")
export default class NqyController {
  @operation({
    summary: "Get Nqy",
  })
  @get()
  static getNqy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqy",
  })
  @post("{id}")
  static createNqy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
