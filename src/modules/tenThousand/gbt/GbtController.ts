import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gbt")
export default class GbtController {
  @operation({
    summary: "Get Gbt",
  })
  @get()
  static getGbt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gbt",
  })
  @post("{id}")
  static createGbt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
