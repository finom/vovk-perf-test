import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwv")
export default class HwvController {
  @operation({
    summary: "Get Hwv",
  })
  @get()
  static getHwv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwv",
  })
  @post("{id}")
  static createHwv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
