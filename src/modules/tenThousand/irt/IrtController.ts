import { procedure, prefix, get, post, operation } from "vovk";

@prefix("irt")
export default class IrtController {
  @operation({
    summary: "Get Irt",
  })
  @get()
  static getIrt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Irt",
  })
  @post("{id}")
  static createIrt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
