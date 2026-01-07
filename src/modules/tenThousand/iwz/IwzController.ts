import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwz")
export default class IwzController {
  @operation({
    summary: "Get Iwz",
  })
  @get()
  static getIwz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwz",
  })
  @post("{id}")
  static createIwz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
