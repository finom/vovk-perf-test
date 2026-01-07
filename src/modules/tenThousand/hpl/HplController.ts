import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpl")
export default class HplController {
  @operation({
    summary: "Get Hpl",
  })
  @get()
  static getHpl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpl",
  })
  @post("{id}")
  static createHpl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
