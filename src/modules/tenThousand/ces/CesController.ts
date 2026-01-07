import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ces")
export default class CesController {
  @operation({
    summary: "Get Ces",
  })
  @get()
  static getCes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ces",
  })
  @post("{id}")
  static createCes = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
