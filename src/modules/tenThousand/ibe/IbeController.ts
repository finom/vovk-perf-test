import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibe")
export default class IbeController {
  @operation({
    summary: "Get Ibe",
  })
  @get()
  static getIbe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibe",
  })
  @post("{id}")
  static createIbe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
