import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epj")
export default class EpjController {
  @operation({
    summary: "Get Epj",
  })
  @get()
  static getEpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epj",
  })
  @post("{id}")
  static createEpj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
