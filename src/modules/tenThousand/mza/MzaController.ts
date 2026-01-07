import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mza")
export default class MzaController {
  @operation({
    summary: "Get Mza",
  })
  @get()
  static getMza = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mza",
  })
  @post("{id}")
  static createMza = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
