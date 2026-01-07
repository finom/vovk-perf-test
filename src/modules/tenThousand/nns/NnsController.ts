import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nns")
export default class NnsController {
  @operation({
    summary: "Get Nns",
  })
  @get()
  static getNns = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nns",
  })
  @post("{id}")
  static createNns = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
