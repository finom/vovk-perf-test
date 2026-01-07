import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hid")
export default class HidController {
  @operation({
    summary: "Get Hid",
  })
  @get()
  static getHid = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hid",
  })
  @post("{id}")
  static createHid = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
