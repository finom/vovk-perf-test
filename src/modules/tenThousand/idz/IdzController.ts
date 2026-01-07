import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idz")
export default class IdzController {
  @operation({
    summary: "Get Idz",
  })
  @get()
  static getIdz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idz",
  })
  @post("{id}")
  static createIdz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
