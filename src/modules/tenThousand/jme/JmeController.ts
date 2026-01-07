import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jme")
export default class JmeController {
  @operation({
    summary: "Get Jme",
  })
  @get()
  static getJme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jme",
  })
  @post("{id}")
  static createJme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
