import { procedure, prefix, get, post, operation } from "vovk";

@prefix("joz")
export default class JozController {
  @operation({
    summary: "Get Joz",
  })
  @get()
  static getJoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Joz",
  })
  @post("{id}")
  static createJoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
