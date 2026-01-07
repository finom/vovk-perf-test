import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gva")
export default class GvaController {
  @operation({
    summary: "Get Gva",
  })
  @get()
  static getGva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gva",
  })
  @post("{id}")
  static createGva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
