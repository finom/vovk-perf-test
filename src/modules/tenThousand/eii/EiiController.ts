import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eii")
export default class EiiController {
  @operation({
    summary: "Get Eii",
  })
  @get()
  static getEii = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eii",
  })
  @post("{id}")
  static createEii = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
