import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jlo")
export default class JloController {
  @operation({
    summary: "Get Jlo",
  })
  @get()
  static getJlo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jlo",
  })
  @post("{id}")
  static createJlo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
