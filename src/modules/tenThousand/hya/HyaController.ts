import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hya")
export default class HyaController {
  @operation({
    summary: "Get Hya",
  })
  @get()
  static getHya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hya",
  })
  @post("{id}")
  static createHya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
