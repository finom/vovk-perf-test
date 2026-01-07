import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzh")
export default class BzhController {
  @operation({
    summary: "Get Bzh",
  })
  @get()
  static getBzh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzh",
  })
  @post("{id}")
  static createBzh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
