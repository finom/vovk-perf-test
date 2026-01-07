import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ot")
export default class OtController {
  @operation({
    summary: "Get Ot",
  })
  @get()
  static getOt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ot",
  })
  @post("{id}")
  static createOt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
