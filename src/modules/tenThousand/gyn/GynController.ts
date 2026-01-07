import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyn")
export default class GynController {
  @operation({
    summary: "Get Gyn",
  })
  @get()
  static getGyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyn",
  })
  @post("{id}")
  static createGyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
