import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iie")
export default class IieController {
  @operation({
    summary: "Get Iie",
  })
  @get()
  static getIie = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iie",
  })
  @post("{id}")
  static createIie = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
