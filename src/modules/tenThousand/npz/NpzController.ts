import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npz")
export default class NpzController {
  @operation({
    summary: "Get Npz",
  })
  @get()
  static getNpz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npz",
  })
  @post("{id}")
  static createNpz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
