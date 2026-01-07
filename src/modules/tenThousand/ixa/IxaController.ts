import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ixa")
export default class IxaController {
  @operation({
    summary: "Get Ixa",
  })
  @get()
  static getIxa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ixa",
  })
  @post("{id}")
  static createIxa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
