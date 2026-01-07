import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyp")
export default class EypController {
  @operation({
    summary: "Get Eyp",
  })
  @get()
  static getEyp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyp",
  })
  @post("{id}")
  static createEyp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
