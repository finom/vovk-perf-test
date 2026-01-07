import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ehj")
export default class EhjController {
  @operation({
    summary: "Get Ehj",
  })
  @get()
  static getEhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ehj",
  })
  @post("{id}")
  static createEhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
