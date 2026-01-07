import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ftt")
export default class FttController {
  @operation({
    summary: "Get Ftt",
  })
  @get()
  static getFtt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ftt",
  })
  @post("{id}")
  static createFtt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
