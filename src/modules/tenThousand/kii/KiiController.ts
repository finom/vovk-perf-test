import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kii")
export default class KiiController {
  @operation({
    summary: "Get Kii",
  })
  @get()
  static getKii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kii",
  })
  @post("{id}")
  static createKii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
