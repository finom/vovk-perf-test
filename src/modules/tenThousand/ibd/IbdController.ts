import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ibd")
export default class IbdController {
  @operation({
    summary: "Get Ibd",
  })
  @get()
  static getIbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ibd",
  })
  @post("{id}")
  static createIbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
