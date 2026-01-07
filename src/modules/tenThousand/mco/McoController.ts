import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mco")
export default class McoController {
  @operation({
    summary: "Get Mco",
  })
  @get()
  static getMco = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mco",
  })
  @post("{id}")
  static createMco = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
