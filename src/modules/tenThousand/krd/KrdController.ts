import { procedure, prefix, get, post, operation } from "vovk";

@prefix("krd")
export default class KrdController {
  @operation({
    summary: "Get Krd",
  })
  @get()
  static getKrd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Krd",
  })
  @post("{id}")
  static createKrd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
