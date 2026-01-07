import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ahp")
export default class AhpController {
  @operation({
    summary: "Get Ahp",
  })
  @get()
  static getAhp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ahp",
  })
  @post("{id}")
  static createAhp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
