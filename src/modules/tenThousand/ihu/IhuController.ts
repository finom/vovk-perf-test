import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ihu")
export default class IhuController {
  @operation({
    summary: "Get Ihu",
  })
  @get()
  static getIhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihu",
  })
  @post("{id}")
  static createIhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
