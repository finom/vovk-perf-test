import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kj")
export default class KjController {
  @operation({
    summary: "Get Kj",
  })
  @get()
  static getKj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kj",
  })
  @post("{id}")
  static createKj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
