import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbd")
export default class HbdController {
  @operation({
    summary: "Get Hbd",
  })
  @get()
  static getHbd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbd",
  })
  @post("{id}")
  static createHbd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
