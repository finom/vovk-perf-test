import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jdj")
export default class JdjController {
  @operation({
    summary: "Get Jdj",
  })
  @get()
  static getJdj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jdj",
  })
  @post("{id}")
  static createJdj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
