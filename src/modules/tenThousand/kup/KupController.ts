import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kup")
export default class KupController {
  @operation({
    summary: "Get Kup",
  })
  @get()
  static getKup = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kup",
  })
  @post("{id}")
  static createKup = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
