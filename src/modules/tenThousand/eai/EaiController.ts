import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eai")
export default class EaiController {
  @operation({
    summary: "Get Eai",
  })
  @get()
  static getEai = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eai",
  })
  @post("{id}")
  static createEai = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
