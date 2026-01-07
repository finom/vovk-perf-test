import { procedure, prefix, get, post, operation } from "vovk";

@prefix("igy")
export default class IgyController {
  @operation({
    summary: "Get Igy",
  })
  @get()
  static getIgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Igy",
  })
  @post("{id}")
  static createIgy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
