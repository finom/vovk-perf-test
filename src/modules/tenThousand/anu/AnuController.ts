import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anu")
export default class AnuController {
  @operation({
    summary: "Get Anu",
  })
  @get()
  static getAnu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anu",
  })
  @post("{id}")
  static createAnu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
