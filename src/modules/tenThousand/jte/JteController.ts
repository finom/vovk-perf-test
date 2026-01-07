import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jte")
export default class JteController {
  @operation({
    summary: "Get Jte",
  })
  @get()
  static getJte = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jte",
  })
  @post("{id}")
  static createJte = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
