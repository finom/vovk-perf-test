import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ief")
export default class IefController {
  @operation({
    summary: "Get Ief",
  })
  @get()
  static getIef = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ief",
  })
  @post("{id}")
  static createIef = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
