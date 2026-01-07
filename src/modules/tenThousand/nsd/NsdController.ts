import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsd")
export default class NsdController {
  @operation({
    summary: "Get Nsd",
  })
  @get()
  static getNsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nsd",
  })
  @post("{id}")
  static createNsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
