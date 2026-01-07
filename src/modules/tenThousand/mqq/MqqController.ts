import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mqq")
export default class MqqController {
  @operation({
    summary: "Get Mqq",
  })
  @get()
  static getMqq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mqq",
  })
  @post("{id}")
  static createMqq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
