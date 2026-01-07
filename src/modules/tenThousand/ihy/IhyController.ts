import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihy")
export default class IhyController {
  @operation({
    summary: "Get Ihy",
  })
  @get()
  static getIhy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihy",
  })
  @post("{id}")
  static createIhy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
