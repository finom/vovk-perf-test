import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iyo")
export default class IyoController {
  @operation({
    summary: "Get Iyo",
  })
  @get()
  static getIyo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyo",
  })
  @post("{id}")
  static createIyo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
