import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hbx")
export default class HbxController {
  @operation({
    summary: "Get Hbx",
  })
  @get()
  static getHbx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbx",
  })
  @post("{id}")
  static createHbx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
