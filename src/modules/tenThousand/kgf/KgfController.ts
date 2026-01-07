import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgf")
export default class KgfController {
  @operation({
    summary: "Get Kgf",
  })
  @get()
  static getKgf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgf",
  })
  @post("{id}")
  static createKgf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
