import { procedure, prefix, get, post, operation } from "vovk";

@prefix("maq")
export default class MaqController {
  @operation({
    summary: "Get Maq",
  })
  @get()
  static getMaq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Maq",
  })
  @post("{id}")
  static createMaq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
