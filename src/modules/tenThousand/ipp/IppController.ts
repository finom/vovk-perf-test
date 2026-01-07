import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ipp")
export default class IppController {
  @operation({
    summary: "Get Ipp",
  })
  @get()
  static getIpp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ipp",
  })
  @post("{id}")
  static createIpp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
