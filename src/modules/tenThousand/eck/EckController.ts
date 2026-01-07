import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eck")
export default class EckController {
  @operation({
    summary: "Get Eck",
  })
  @get()
  static getEck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eck",
  })
  @post("{id}")
  static createEck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
