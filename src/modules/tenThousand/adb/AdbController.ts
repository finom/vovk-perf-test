import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adb")
export default class AdbController {
  @operation({
    summary: "Get Adb",
  })
  @get()
  static getAdb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adb",
  })
  @post("{id}")
  static createAdb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
