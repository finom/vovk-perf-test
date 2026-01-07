import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fza")
export default class FzaController {
  @operation({
    summary: "Get Fza",
  })
  @get()
  static getFza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fza",
  })
  @post("{id}")
  static createFza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
