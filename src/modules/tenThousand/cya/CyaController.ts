import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cya")
export default class CyaController {
  @operation({
    summary: "Get Cya",
  })
  @get()
  static getCya = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cya",
  })
  @post("{id}")
  static createCya = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
