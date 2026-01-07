import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyt")
export default class IytController {
  @operation({
    summary: "Get Iyt",
  })
  @get()
  static getIyt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyt",
  })
  @post("{id}")
  static createIyt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
