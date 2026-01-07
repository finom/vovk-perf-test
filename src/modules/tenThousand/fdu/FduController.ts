import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fdu")
export default class FduController {
  @operation({
    summary: "Get Fdu",
  })
  @get()
  static getFdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fdu",
  })
  @post("{id}")
  static createFdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
