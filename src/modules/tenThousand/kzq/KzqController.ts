import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kzq")
export default class KzqController {
  @operation({
    summary: "Get Kzq",
  })
  @get()
  static getKzq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzq",
  })
  @post("{id}")
  static createKzq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
