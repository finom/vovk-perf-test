import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iat")
export default class IatController {
  @operation({
    summary: "Get Iat",
  })
  @get()
  static getIat = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iat",
  })
  @post("{id}")
  static createIat = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
