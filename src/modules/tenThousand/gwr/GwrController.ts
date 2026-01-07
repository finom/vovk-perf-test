import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gwr")
export default class GwrController {
  @operation({
    summary: "Get Gwr",
  })
  @get()
  static getGwr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gwr",
  })
  @post("{id}")
  static createGwr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
