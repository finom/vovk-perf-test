import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbx")
export default class KbxController {
  @operation({
    summary: "Get Kbx",
  })
  @get()
  static getKbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbx",
  })
  @post("{id}")
  static createKbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
