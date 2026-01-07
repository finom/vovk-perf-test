import { procedure, prefix, get, post, operation } from "vovk";

@prefix("avc")
export default class AvcController {
  @operation({
    summary: "Get Avc",
  })
  @get()
  static getAvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avc",
  })
  @post("{id}")
  static createAvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
