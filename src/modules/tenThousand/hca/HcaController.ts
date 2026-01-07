import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hca")
export default class HcaController {
  @operation({
    summary: "Get Hca",
  })
  @get()
  static getHca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hca",
  })
  @post("{id}")
  static createHca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
