import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jip")
export default class JipController {
  @operation({
    summary: "Get Jip",
  })
  @get()
  static getJip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jip",
  })
  @post("{id}")
  static createJip = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
