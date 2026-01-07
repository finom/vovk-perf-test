import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgh")
export default class FghController {
  @operation({
    summary: "Get Fgh",
  })
  @get()
  static getFgh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgh",
  })
  @post("{id}")
  static createFgh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
