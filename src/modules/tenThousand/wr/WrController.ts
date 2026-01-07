import { procedure, prefix, get, post, operation } from "vovk";

@prefix("wr")
export default class WrController {
  @operation({
    summary: "Get Wr",
  })
  @get()
  static getWr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Wr",
  })
  @post("{id}")
  static createWr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
