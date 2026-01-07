import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jyt")
export default class JytController {
  @operation({
    summary: "Get Jyt",
  })
  @get()
  static getJyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jyt",
  })
  @post("{id}")
  static createJyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
