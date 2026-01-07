import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hyt")
export default class HytController {
  @operation({
    summary: "Get Hyt",
  })
  @get()
  static getHyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hyt",
  })
  @post("{id}")
  static createHyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
