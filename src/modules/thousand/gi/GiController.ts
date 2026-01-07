import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gi")
export default class GiController {
  @operation({
    summary: "Get Gi",
  })
  @get()
  static getGi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gi",
  })
  @post("{id}")
  static createGi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
