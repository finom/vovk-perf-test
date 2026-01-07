import { procedure, prefix, get, post, operation } from "vovk";

@prefix("muq")
export default class MuqController {
  @operation({
    summary: "Get Muq",
  })
  @get()
  static getMuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Muq",
  })
  @post("{id}")
  static createMuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
