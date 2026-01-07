import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ajt")
export default class AjtController {
  @operation({
    summary: "Get Ajt",
  })
  @get()
  static getAjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ajt",
  })
  @post("{id}")
  static createAjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
