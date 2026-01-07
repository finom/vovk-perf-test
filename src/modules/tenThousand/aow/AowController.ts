import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aow")
export default class AowController {
  @operation({
    summary: "Get Aow",
  })
  @get()
  static getAow = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aow",
  })
  @post("{id}")
  static createAow = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
