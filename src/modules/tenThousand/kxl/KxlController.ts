import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kxl")
export default class KxlController {
  @operation({
    summary: "Get Kxl",
  })
  @get()
  static getKxl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kxl",
  })
  @post("{id}")
  static createKxl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
