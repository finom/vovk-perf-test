import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kpz")
export default class KpzController {
  @operation({
    summary: "Get Kpz",
  })
  @get()
  static getKpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kpz",
  })
  @post("{id}")
  static createKpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
