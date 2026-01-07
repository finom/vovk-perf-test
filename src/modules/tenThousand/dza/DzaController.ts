import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dza")
export default class DzaController {
  @operation({
    summary: "Get Dza",
  })
  @get()
  static getDza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dza",
  })
  @post("{id}")
  static createDza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
