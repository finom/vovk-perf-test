import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dmz")
export default class DmzController {
  @operation({
    summary: "Get Dmz",
  })
  @get()
  static getDmz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dmz",
  })
  @post("{id}")
  static createDmz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
