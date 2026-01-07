import { procedure, prefix, get, post, operation } from "vovk";

@prefix("edx")
export default class EdxController {
  @operation({
    summary: "Get Edx",
  })
  @get()
  static getEdx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Edx",
  })
  @post("{id}")
  static createEdx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
