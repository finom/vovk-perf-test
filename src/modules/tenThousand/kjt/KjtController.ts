import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjt")
export default class KjtController {
  @operation({
    summary: "Get Kjt",
  })
  @get()
  static getKjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjt",
  })
  @post("{id}")
  static createKjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
