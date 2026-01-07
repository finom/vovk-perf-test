import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jja")
export default class JjaController {
  @operation({
    summary: "Get Jja",
  })
  @get()
  static getJja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jja",
  })
  @post("{id}")
  static createJja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
