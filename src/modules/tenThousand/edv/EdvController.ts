import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edv")
export default class EdvController {
  @operation({
    summary: "Get Edv",
  })
  @get()
  static getEdv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edv",
  })
  @post("{id}")
  static createEdv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
