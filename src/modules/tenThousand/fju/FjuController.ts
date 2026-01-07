import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fju")
export default class FjuController {
  @operation({
    summary: "Get Fju",
  })
  @get()
  static getFju = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fju",
  })
  @post("{id}")
  static createFju = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
