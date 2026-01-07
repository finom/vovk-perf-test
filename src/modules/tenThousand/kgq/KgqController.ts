import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgq")
export default class KgqController {
  @operation({
    summary: "Get Kgq",
  })
  @get()
  static getKgq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgq",
  })
  @post("{id}")
  static createKgq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
