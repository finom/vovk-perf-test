import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ilm")
export default class IlmController {
  @operation({
    summary: "Get Ilm",
  })
  @get()
  static getIlm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ilm",
  })
  @post("{id}")
  static createIlm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
