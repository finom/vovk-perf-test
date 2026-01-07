import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hcu")
export default class HcuController {
  @operation({
    summary: "Get Hcu",
  })
  @get()
  static getHcu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hcu",
  })
  @post("{id}")
  static createHcu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
