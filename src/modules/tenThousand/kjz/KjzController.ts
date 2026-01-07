import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjz")
export default class KjzController {
  @operation({
    summary: "Get Kjz",
  })
  @get()
  static getKjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjz",
  })
  @post("{id}")
  static createKjz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
