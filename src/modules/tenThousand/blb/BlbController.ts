import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blb")
export default class BlbController {
  @operation({
    summary: "Get Blb",
  })
  @get()
  static getBlb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blb",
  })
  @post("{id}")
  static createBlb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
