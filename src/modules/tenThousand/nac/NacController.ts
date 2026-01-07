import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nac")
export default class NacController {
  @operation({
    summary: "Get Nac",
  })
  @get()
  static getNac = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nac",
  })
  @post("{id}")
  static createNac = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
