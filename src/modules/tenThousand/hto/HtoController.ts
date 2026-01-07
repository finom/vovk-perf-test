import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hto")
export default class HtoController {
  @operation({
    summary: "Get Hto",
  })
  @get()
  static getHto = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hto",
  })
  @post("{id}")
  static createHto = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
