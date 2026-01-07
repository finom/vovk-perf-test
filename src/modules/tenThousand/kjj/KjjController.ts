import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjj")
export default class KjjController {
  @operation({
    summary: "Get Kjj",
  })
  @get()
  static getKjj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjj",
  })
  @post("{id}")
  static createKjj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
