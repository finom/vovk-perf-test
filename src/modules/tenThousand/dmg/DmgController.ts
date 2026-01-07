import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmg")
export default class DmgController {
  @operation({
    summary: "Get Dmg",
  })
  @get()
  static getDmg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmg",
  })
  @post("{id}")
  static createDmg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
