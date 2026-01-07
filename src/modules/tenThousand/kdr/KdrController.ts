import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kdr")
export default class KdrController {
  @operation({
    summary: "Get Kdr",
  })
  @get()
  static getKdr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kdr",
  })
  @post("{id}")
  static createKdr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
