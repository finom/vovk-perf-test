import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hda")
export default class HdaController {
  @operation({
    summary: "Get Hda",
  })
  @get()
  static getHda = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hda",
  })
  @post("{id}")
  static createHda = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
