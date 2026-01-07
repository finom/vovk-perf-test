import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksp")
export default class KspController {
  @operation({
    summary: "Get Ksp",
  })
  @get()
  static getKsp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksp",
  })
  @post("{id}")
  static createKsp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
