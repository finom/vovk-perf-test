import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jhu")
export default class JhuController {
  @operation({
    summary: "Get Jhu",
  })
  @get()
  static getJhu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jhu",
  })
  @post("{id}")
  static createJhu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
