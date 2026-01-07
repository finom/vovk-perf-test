import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hab")
export default class HabController {
  @operation({
    summary: "Get Hab",
  })
  @get()
  static getHab = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hab",
  })
  @post("{id}")
  static createHab = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
