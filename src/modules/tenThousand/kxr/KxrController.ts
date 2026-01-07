import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxr")
export default class KxrController {
  @operation({
    summary: "Get Kxr",
  })
  @get()
  static getKxr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxr",
  })
  @post("{id}")
  static createKxr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
