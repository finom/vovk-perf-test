import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jur")
export default class JurController {
  @operation({
    summary: "Get Jur",
  })
  @get()
  static getJur = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Jur",
  })
  @post("{id}")
  static createJur = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
