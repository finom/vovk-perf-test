import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aau")
export default class AauController {
  @operation({
    summary: "Get Aau",
  })
  @get()
  static getAau = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aau",
  })
  @post("{id}")
  static createAau = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
