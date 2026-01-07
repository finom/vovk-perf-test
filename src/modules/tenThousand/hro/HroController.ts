import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hro")
export default class HroController {
  @operation({
    summary: "Get Hro",
  })
  @get()
  static getHro = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hro",
  })
  @post("{id}")
  static createHro = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
