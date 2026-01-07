import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nax")
export default class NaxController {
  @operation({
    summary: "Get Nax",
  })
  @get()
  static getNax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nax",
  })
  @post("{id}")
  static createNax = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
