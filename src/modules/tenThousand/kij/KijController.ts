import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kij")
export default class KijController {
  @operation({
    summary: "Get Kij",
  })
  @get()
  static getKij = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kij",
  })
  @post("{id}")
  static createKij = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
