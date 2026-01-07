import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jci")
export default class JciController {
  @operation({
    summary: "Get Jci",
  })
  @get()
  static getJci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jci",
  })
  @post("{id}")
  static createJci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
