import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nme")
export default class NmeController {
  @operation({
    summary: "Get Nme",
  })
  @get()
  static getNme = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nme",
  })
  @post("{id}")
  static createNme = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
