import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jca")
export default class JcaController {
  @operation({
    summary: "Get Jca",
  })
  @get()
  static getJca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jca",
  })
  @post("{id}")
  static createJca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
