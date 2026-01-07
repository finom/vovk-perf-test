import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apc")
export default class ApcController {
  @operation({
    summary: "Get Apc",
  })
  @get()
  static getApc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apc",
  })
  @post("{id}")
  static createApc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
