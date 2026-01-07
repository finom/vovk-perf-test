import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exe")
export default class ExeController {
  @operation({
    summary: "Get Exe",
  })
  @get()
  static getExe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exe",
  })
  @post("{id}")
  static createExe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
