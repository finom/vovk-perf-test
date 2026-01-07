import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noz")
export default class NozController {
  @operation({
    summary: "Get Noz",
  })
  @get()
  static getNoz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noz",
  })
  @post("{id}")
  static createNoz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
