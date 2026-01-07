import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iwd")
export default class IwdController {
  @operation({
    summary: "Get Iwd",
  })
  @get()
  static getIwd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iwd",
  })
  @post("{id}")
  static createIwd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
