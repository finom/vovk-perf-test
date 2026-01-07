import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nru")
export default class NruController {
  @operation({
    summary: "Get Nru",
  })
  @get()
  static getNru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nru",
  })
  @post("{id}")
  static createNru = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
