import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evc")
export default class EvcController {
  @operation({
    summary: "Get Evc",
  })
  @get()
  static getEvc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evc",
  })
  @post("{id}")
  static createEvc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
