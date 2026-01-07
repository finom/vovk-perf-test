import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jty")
export default class JtyController {
  @operation({
    summary: "Get Jty",
  })
  @get()
  static getJty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jty",
  })
  @post("{id}")
  static createJty = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
