import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jad")
export default class JadController {
  @operation({
    summary: "Get Jad",
  })
  @get()
  static getJad = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jad",
  })
  @post("{id}")
  static createJad = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
