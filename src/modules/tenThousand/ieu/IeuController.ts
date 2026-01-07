import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ieu")
export default class IeuController {
  @operation({
    summary: "Get Ieu",
  })
  @get()
  static getIeu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ieu",
  })
  @post("{id}")
  static createIeu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
