import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jqe")
export default class JqeController {
  @operation({
    summary: "Get Jqe",
  })
  @get()
  static getJqe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jqe",
  })
  @post("{id}")
  static createJqe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
