import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyo")
export default class EyoController {
  @operation({
    summary: "Get Eyo",
  })
  @get()
  static getEyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyo",
  })
  @post("{id}")
  static createEyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
