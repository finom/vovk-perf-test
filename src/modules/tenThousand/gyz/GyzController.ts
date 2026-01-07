import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyz")
export default class GyzController {
  @operation({
    summary: "Get Gyz",
  })
  @get()
  static getGyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyz",
  })
  @post("{id}")
  static createGyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
