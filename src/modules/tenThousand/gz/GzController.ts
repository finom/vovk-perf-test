import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gz")
export default class GzController {
  @operation({
    summary: "Get Gz",
  })
  @get()
  static getGz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gz",
  })
  @post("{id}")
  static createGz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
