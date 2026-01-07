import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nga")
export default class NgaController {
  @operation({
    summary: "Get Nga",
  })
  @get()
  static getNga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nga",
  })
  @post("{id}")
  static createNga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
