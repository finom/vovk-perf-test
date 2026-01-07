import { procedure, prefix, get, post, operation } from "vovk";

@prefix("az")
export default class AzController {
  @operation({
    summary: "Get Az",
  })
  @get()
  static getAz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Az",
  })
  @post("{id}")
  static createAz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
