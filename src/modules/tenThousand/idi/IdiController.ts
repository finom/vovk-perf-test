import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idi")
export default class IdiController {
  @operation({
    summary: "Get Idi",
  })
  @get()
  static getIdi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idi",
  })
  @post("{id}")
  static createIdi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
