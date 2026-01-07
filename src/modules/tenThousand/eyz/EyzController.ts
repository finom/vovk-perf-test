import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyz")
export default class EyzController {
  @operation({
    summary: "Get Eyz",
  })
  @get()
  static getEyz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyz",
  })
  @post("{id}")
  static createEyz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
