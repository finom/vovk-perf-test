import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jff")
export default class JffController {
  @operation({
    summary: "Get Jff",
  })
  @get()
  static getJff = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jff",
  })
  @post("{id}")
  static createJff = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
