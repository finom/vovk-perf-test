import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kav")
export default class KavController {
  @operation({
    summary: "Get Kav",
  })
  @get()
  static getKav = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kav",
  })
  @post("{id}")
  static createKav = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
