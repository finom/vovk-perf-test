import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exz")
export default class ExzController {
  @operation({
    summary: "Get Exz",
  })
  @get()
  static getExz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exz",
  })
  @post("{id}")
  static createExz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
