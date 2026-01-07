import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fla")
export default class FlaController {
  @operation({
    summary: "Get Fla",
  })
  @get()
  static getFla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fla",
  })
  @post("{id}")
  static createFla = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
