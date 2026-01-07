import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imw")
export default class ImwController {
  @operation({
    summary: "Get Imw",
  })
  @get()
  static getImw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imw",
  })
  @post("{id}")
  static createImw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
