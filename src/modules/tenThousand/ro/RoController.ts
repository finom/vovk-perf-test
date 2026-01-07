import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ro")
export default class RoController {
  @operation({
    summary: "Get Ro",
  })
  @get()
  static getRo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ro",
  })
  @post("{id}")
  static createRo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
