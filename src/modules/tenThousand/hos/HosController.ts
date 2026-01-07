import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hos")
export default class HosController {
  @operation({
    summary: "Get Hos",
  })
  @get()
  static getHos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hos",
  })
  @post("{id}")
  static createHos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
