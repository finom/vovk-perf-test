import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alj")
export default class AljController {
  @operation({
    summary: "Get Alj",
  })
  @get()
  static getAlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alj",
  })
  @post("{id}")
  static createAlj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
