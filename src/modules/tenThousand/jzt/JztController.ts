import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jzt")
export default class JztController {
  @operation({
    summary: "Get Jzt",
  })
  @get()
  static getJzt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jzt",
  })
  @post("{id}")
  static createJzt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
