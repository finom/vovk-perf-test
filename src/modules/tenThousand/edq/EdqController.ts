import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edq")
export default class EdqController {
  @operation({
    summary: "Get Edq",
  })
  @get()
  static getEdq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edq",
  })
  @post("{id}")
  static createEdq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
