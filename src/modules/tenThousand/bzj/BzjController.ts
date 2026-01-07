import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzj")
export default class BzjController {
  @operation({
    summary: "Get Bzj",
  })
  @get()
  static getBzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzj",
  })
  @post("{id}")
  static createBzj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
