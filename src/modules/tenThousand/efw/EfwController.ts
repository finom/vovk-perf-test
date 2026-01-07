import { procedure, prefix, get, post, operation } from "vovk";

@prefix("efw")
export default class EfwController {
  @operation({
    summary: "Get Efw",
  })
  @get()
  static getEfw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Efw",
  })
  @post("{id}")
  static createEfw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
