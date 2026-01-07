import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fai")
export default class FaiController {
  @operation({
    summary: "Get Fai",
  })
  @get()
  static getFai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fai",
  })
  @post("{id}")
  static createFai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
