import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ide")
export default class IdeController {
  @operation({
    summary: "Get Ide",
  })
  @get()
  static getIde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ide",
  })
  @post("{id}")
  static createIde = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
