import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mdu")
export default class MduController {
  @operation({
    summary: "Get Mdu",
  })
  @get()
  static getMdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mdu",
  })
  @post("{id}")
  static createMdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
