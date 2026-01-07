import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eke")
export default class EkeController {
  @operation({
    summary: "Get Eke",
  })
  @get()
  static getEke = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eke",
  })
  @post("{id}")
  static createEke = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
