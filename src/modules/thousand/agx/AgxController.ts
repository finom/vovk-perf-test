import { procedure, prefix, get, post, operation } from "vovk";

@prefix("agx")
export default class AgxController {
  @operation({
    summary: "Get Agx",
  })
  @get()
  static getAgx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agx",
  })
  @post("{id}")
  static createAgx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
