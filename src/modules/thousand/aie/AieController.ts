import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aie")
export default class AieController {
  @operation({
    summary: "Get Aie",
  })
  @get()
  static getAie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aie",
  })
  @post("{id}")
  static createAie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
