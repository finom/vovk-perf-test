import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kve")
export default class KveController {
  @operation({
    summary: "Get Kve",
  })
  @get()
  static getKve = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kve",
  })
  @post("{id}")
  static createKve = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
