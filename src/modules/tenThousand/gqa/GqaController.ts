import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqa")
export default class GqaController {
  @operation({
    summary: "Get Gqa",
  })
  @get()
  static getGqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqa",
  })
  @post("{id}")
  static createGqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
