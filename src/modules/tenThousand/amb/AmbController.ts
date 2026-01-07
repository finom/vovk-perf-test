import { procedure, prefix, get, post, operation } from "vovk";

@prefix("amb")
export default class AmbController {
  @operation({
    summary: "Get Amb",
  })
  @get()
  static getAmb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amb",
  })
  @post("{id}")
  static createAmb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
