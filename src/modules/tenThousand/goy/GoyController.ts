import { procedure, prefix, get, post, operation } from "vovk";

@prefix("goy")
export default class GoyController {
  @operation({
    summary: "Get Goy",
  })
  @get()
  static getGoy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Goy",
  })
  @post("{id}")
  static createGoy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
