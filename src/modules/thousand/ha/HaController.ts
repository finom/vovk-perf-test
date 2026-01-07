import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ha")
export default class HaController {
  @operation({
    summary: "Get Ha",
  })
  @get()
  static getHa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ha",
  })
  @post("{id}")
  static createHa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
