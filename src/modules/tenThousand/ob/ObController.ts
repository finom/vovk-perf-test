import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ob")
export default class ObController {
  @operation({
    summary: "Get Ob",
  })
  @get()
  static getOb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ob",
  })
  @post("{id}")
  static createOb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
