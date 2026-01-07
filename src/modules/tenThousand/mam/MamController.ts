import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mam")
export default class MamController {
  @operation({
    summary: "Get Mam",
  })
  @get()
  static getMam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mam",
  })
  @post("{id}")
  static createMam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
