import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aqa")
export default class AqaController {
  @operation({
    summary: "Get Aqa",
  })
  @get()
  static getAqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqa",
  })
  @post("{id}")
  static createAqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
