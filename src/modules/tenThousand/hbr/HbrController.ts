import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbr")
export default class HbrController {
  @operation({
    summary: "Get Hbr",
  })
  @get()
  static getHbr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbr",
  })
  @post("{id}")
  static createHbr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
