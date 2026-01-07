import { procedure, prefix, get, post, operation } from "vovk";

@prefix("exw")
export default class ExwController {
  @operation({
    summary: "Get Exw",
  })
  @get()
  static getExw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Exw",
  })
  @post("{id}")
  static createExw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
