import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jra")
export default class JraController {
  @operation({
    summary: "Get Jra",
  })
  @get()
  static getJra = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jra",
  })
  @post("{id}")
  static createJra = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
