import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjb")
export default class JjbController {
  @operation({
    summary: "Get Jjb",
  })
  @get()
  static getJjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjb",
  })
  @post("{id}")
  static createJjb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
