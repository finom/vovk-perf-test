import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kgi")
export default class KgiController {
  @operation({
    summary: "Get Kgi",
  })
  @get()
  static getKgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kgi",
  })
  @post("{id}")
  static createKgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
