import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jox")
export default class JoxController {
  @operation({
    summary: "Get Jox",
  })
  @get()
  static getJox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jox",
  })
  @post("{id}")
  static createJox = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
