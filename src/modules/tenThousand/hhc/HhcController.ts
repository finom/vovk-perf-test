import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhc")
export default class HhcController {
  @operation({
    summary: "Get Hhc",
  })
  @get()
  static getHhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhc",
  })
  @post("{id}")
  static createHhc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
