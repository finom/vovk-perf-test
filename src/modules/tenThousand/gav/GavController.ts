import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gav")
export default class GavController {
  @operation({
    summary: "Get Gav",
  })
  @get()
  static getGav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gav",
  })
  @post("{id}")
  static createGav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
