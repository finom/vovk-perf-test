import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guq")
export default class GuqController {
  @operation({
    summary: "Get Guq",
  })
  @get()
  static getGuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guq",
  })
  @post("{id}")
  static createGuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
