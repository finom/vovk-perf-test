import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hig")
export default class HigController {
  @operation({
    summary: "Get Hig",
  })
  @get()
  static getHig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hig",
  })
  @post("{id}")
  static createHig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
