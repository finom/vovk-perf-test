import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vo")
export default class VoController {
  @operation({
    summary: "Get Vo",
  })
  @get()
  static getVo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vo",
  })
  @post("{id}")
  static createVo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
