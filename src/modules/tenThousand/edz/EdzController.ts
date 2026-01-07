import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edz")
export default class EdzController {
  @operation({
    summary: "Get Edz",
  })
  @get()
  static getEdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edz",
  })
  @post("{id}")
  static createEdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
