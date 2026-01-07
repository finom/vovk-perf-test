import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ckl")
export default class CklController {
  @operation({
    summary: "Get Ckl",
  })
  @get()
  static getCkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ckl",
  })
  @post("{id}")
  static createCkl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
