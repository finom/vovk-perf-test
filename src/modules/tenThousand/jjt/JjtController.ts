import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jjt")
export default class JjtController {
  @operation({
    summary: "Get Jjt",
  })
  @get()
  static getJjt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jjt",
  })
  @post("{id}")
  static createJjt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
