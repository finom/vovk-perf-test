import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxu")
export default class KxuController {
  @operation({
    summary: "Get Kxu",
  })
  @get()
  static getKxu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxu",
  })
  @post("{id}")
  static createKxu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
