import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cyd")
export default class CydController {
  @operation({
    summary: "Get Cyd",
  })
  @get()
  static getCyd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cyd",
  })
  @post("{id}")
  static createCyd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
