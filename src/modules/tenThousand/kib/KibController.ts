import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kib")
export default class KibController {
  @operation({
    summary: "Get Kib",
  })
  @get()
  static getKib = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kib",
  })
  @post("{id}")
  static createKib = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
