import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ngi")
export default class NgiController {
  @operation({
    summary: "Get Ngi",
  })
  @get()
  static getNgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ngi",
  })
  @post("{id}")
  static createNgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
