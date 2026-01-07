import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jba")
export default class JbaController {
  @operation({
    summary: "Get Jba",
  })
  @get()
  static getJba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jba",
  })
  @post("{id}")
  static createJba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
