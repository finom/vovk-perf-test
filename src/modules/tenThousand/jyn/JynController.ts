import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyn")
export default class JynController {
  @operation({
    summary: "Get Jyn",
  })
  @get()
  static getJyn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyn",
  })
  @post("{id}")
  static createJyn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
