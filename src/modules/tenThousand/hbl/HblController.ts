import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbl")
export default class HblController {
  @operation({
    summary: "Get Hbl",
  })
  @get()
  static getHbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbl",
  })
  @post("{id}")
  static createHbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
