import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwy")
export default class FwyController {
  @operation({
    summary: "Get Fwy",
  })
  @get()
  static getFwy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwy",
  })
  @post("{id}")
  static createFwy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
