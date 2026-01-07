import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eye")
export default class EyeController {
  @operation({
    summary: "Get Eye",
  })
  @get()
  static getEye = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eye",
  })
  @post("{id}")
  static createEye = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
