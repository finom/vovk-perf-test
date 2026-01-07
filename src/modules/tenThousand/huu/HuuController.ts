import { procedure, prefix, get, post, operation } from "vovk";

@prefix("huu")
export default class HuuController {
  @operation({
    summary: "Get Huu",
  })
  @get()
  static getHuu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Huu",
  })
  @post("{id}")
  static createHuu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
