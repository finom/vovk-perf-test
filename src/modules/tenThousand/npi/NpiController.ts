import { procedure, prefix, get, post, operation } from "vovk";

@prefix("npi")
export default class NpiController {
  @operation({
    summary: "Get Npi",
  })
  @get()
  static getNpi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Npi",
  })
  @post("{id}")
  static createNpi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
