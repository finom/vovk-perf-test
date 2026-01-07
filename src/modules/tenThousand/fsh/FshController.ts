import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsh")
export default class FshController {
  @operation({
    summary: "Get Fsh",
  })
  @get()
  static getFsh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsh",
  })
  @post("{id}")
  static createFsh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
