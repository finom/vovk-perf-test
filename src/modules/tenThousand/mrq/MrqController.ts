import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mrq")
export default class MrqController {
  @operation({
    summary: "Get Mrq",
  })
  @get()
  static getMrq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mrq",
  })
  @post("{id}")
  static createMrq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
