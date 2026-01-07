import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iej")
export default class IejController {
  @operation({
    summary: "Get Iej",
  })
  @get()
  static getIej = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iej",
  })
  @post("{id}")
  static createIej = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
