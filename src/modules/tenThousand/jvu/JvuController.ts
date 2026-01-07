import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jvu")
export default class JvuController {
  @operation({
    summary: "Get Jvu",
  })
  @get()
  static getJvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jvu",
  })
  @post("{id}")
  static createJvu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
