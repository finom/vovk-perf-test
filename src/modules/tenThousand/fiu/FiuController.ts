import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fiu")
export default class FiuController {
  @operation({
    summary: "Get Fiu",
  })
  @get()
  static getFiu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiu",
  })
  @post("{id}")
  static createFiu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
