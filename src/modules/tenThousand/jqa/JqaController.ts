import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqa")
export default class JqaController {
  @operation({
    summary: "Get Jqa",
  })
  @get()
  static getJqa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqa",
  })
  @post("{id}")
  static createJqa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
