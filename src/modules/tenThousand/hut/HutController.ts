import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hut")
export default class HutController {
  @operation({
    summary: "Get Hut",
  })
  @get()
  static getHut = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hut",
  })
  @post("{id}")
  static createHut = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
