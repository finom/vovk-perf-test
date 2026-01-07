import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exm")
export default class ExmController {
  @operation({
    summary: "Get Exm",
  })
  @get()
  static getExm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exm",
  })
  @post("{id}")
  static createExm = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
