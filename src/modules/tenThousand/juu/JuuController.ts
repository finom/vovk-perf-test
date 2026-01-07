import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juu")
export default class JuuController {
  @operation({
    summary: "Get Juu",
  })
  @get()
  static getJuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juu",
  })
  @post("{id}")
  static createJuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
