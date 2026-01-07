import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mva")
export default class MvaController {
  @operation({
    summary: "Get Mva",
  })
  @get()
  static getMva = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mva",
  })
  @post("{id}")
  static createMva = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
