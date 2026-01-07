import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ady")
export default class AdyController {
  @operation({
    summary: "Get Ady",
  })
  @get()
  static getAdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ady",
  })
  @post("{id}")
  static createAdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
