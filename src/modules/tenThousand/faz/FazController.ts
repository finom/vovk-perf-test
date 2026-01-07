import { procedure, prefix, get, post, operation } from "vovk";

@prefix("faz")
export default class FazController {
  @operation({
    summary: "Get Faz",
  })
  @get()
  static getFaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Faz",
  })
  @post("{id}")
  static createFaz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
