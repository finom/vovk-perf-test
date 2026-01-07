import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebx")
export default class EbxController {
  @operation({
    summary: "Get Ebx",
  })
  @get()
  static getEbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebx",
  })
  @post("{id}")
  static createEbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
