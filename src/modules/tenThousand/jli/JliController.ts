import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jli")
export default class JliController {
  @operation({
    summary: "Get Jli",
  })
  @get()
  static getJli = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jli",
  })
  @post("{id}")
  static createJli = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
