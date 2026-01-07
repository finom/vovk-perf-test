import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mep")
export default class MepController {
  @operation({
    summary: "Get Mep",
  })
  @get()
  static getMep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mep",
  })
  @post("{id}")
  static createMep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
