import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ert")
export default class ErtController {
  @operation({
    summary: "Get Ert",
  })
  @get()
  static getErt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ert",
  })
  @post("{id}")
  static createErt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
