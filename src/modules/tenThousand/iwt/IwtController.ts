import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwt")
export default class IwtController {
  @operation({
    summary: "Get Iwt",
  })
  @get()
  static getIwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwt",
  })
  @post("{id}")
  static createIwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
