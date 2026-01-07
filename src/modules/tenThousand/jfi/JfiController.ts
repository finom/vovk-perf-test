import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jfi")
export default class JfiController {
  @operation({
    summary: "Get Jfi",
  })
  @get()
  static getJfi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jfi",
  })
  @post("{id}")
  static createJfi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
