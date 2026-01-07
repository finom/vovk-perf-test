import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nqz")
export default class NqzController {
  @operation({
    summary: "Get Nqz",
  })
  @get()
  static getNqz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nqz",
  })
  @post("{id}")
  static createNqz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
