import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpy")
export default class KpyController {
  @operation({
    summary: "Get Kpy",
  })
  @get()
  static getKpy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpy",
  })
  @post("{id}")
  static createKpy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
