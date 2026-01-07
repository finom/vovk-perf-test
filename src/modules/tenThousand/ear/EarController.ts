import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ear")
export default class EarController {
  @operation({
    summary: "Get Ear",
  })
  @get()
  static getEar = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ear",
  })
  @post("{id}")
  static createEar = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
