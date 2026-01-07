import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyt")
export default class GytController {
  @operation({
    summary: "Get Gyt",
  })
  @get()
  static getGyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gyt",
  })
  @post("{id}")
  static createGyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
