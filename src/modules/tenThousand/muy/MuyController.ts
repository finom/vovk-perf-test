import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muy")
export default class MuyController {
  @operation({
    summary: "Get Muy",
  })
  @get()
  static getMuy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muy",
  })
  @post("{id}")
  static createMuy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
