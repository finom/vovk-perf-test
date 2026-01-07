import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mwa")
export default class MwaController {
  @operation({
    summary: "Get Mwa",
  })
  @get()
  static getMwa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mwa",
  })
  @post("{id}")
  static createMwa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
