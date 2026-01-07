import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cjn")
export default class CjnController {
  @operation({
    summary: "Get Cjn",
  })
  @get()
  static getCjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cjn",
  })
  @post("{id}")
  static createCjn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
