import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbl")
export default class KblController {
  @operation({
    summary: "Get Kbl",
  })
  @get()
  static getKbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbl",
  })
  @post("{id}")
  static createKbl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
