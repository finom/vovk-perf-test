import { procedure, prefix, get, post, operation } from "vovk";

@prefix("elc")
export default class ElcController {
  @operation({
    summary: "Get Elc",
  })
  @get()
  static getElc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Elc",
  })
  @post("{id}")
  static createElc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
