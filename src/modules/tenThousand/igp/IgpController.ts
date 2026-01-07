import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igp")
export default class IgpController {
  @operation({
    summary: "Get Igp",
  })
  @get()
  static getIgp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igp",
  })
  @post("{id}")
  static createIgp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
