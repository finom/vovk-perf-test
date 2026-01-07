import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kcd")
export default class KcdController {
  @operation({
    summary: "Get Kcd",
  })
  @get()
  static getKcd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kcd",
  })
  @post("{id}")
  static createKcd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
