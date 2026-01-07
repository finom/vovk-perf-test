import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gth")
export default class GthController {
  @operation({
    summary: "Get Gth",
  })
  @get()
  static getGth = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gth",
  })
  @post("{id}")
  static createGth = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
