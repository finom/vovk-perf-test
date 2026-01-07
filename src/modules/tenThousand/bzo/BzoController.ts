import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzo")
export default class BzoController {
  @operation({
    summary: "Get Bzo",
  })
  @get()
  static getBzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzo",
  })
  @post("{id}")
  static createBzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
