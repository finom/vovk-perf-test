import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ksh")
export default class KshController {
  @operation({
    summary: "Get Ksh",
  })
  @get()
  static getKsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ksh",
  })
  @post("{id}")
  static createKsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
