import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kep")
export default class KepController {
  @operation({
    summary: "Get Kep",
  })
  @get()
  static getKep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kep",
  })
  @post("{id}")
  static createKep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
