import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ina")
export default class InaController {
  @operation({
    summary: "Get Ina",
  })
  @get()
  static getIna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ina",
  })
  @post("{id}")
  static createIna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
