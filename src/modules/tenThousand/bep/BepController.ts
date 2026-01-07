import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bep")
export default class BepController {
  @operation({
    summary: "Get Bep",
  })
  @get()
  static getBep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bep",
  })
  @post("{id}")
  static createBep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
