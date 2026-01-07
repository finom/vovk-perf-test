import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhd")
export default class HhdController {
  @operation({
    summary: "Get Hhd",
  })
  @get()
  static getHhd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhd",
  })
  @post("{id}")
  static createHhd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
