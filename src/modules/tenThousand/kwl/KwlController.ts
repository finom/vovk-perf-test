import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwl")
export default class KwlController {
  @operation({
    summary: "Get Kwl",
  })
  @get()
  static getKwl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwl",
  })
  @post("{id}")
  static createKwl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
