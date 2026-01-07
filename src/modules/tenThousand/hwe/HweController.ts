import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hwe")
export default class HweController {
  @operation({
    summary: "Get Hwe",
  })
  @get()
  static getHwe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hwe",
  })
  @post("{id}")
  static createHwe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
