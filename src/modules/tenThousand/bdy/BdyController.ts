import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bdy")
export default class BdyController {
  @operation({
    summary: "Get Bdy",
  })
  @get()
  static getBdy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bdy",
  })
  @post("{id}")
  static createBdy = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
