import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ndh")
export default class NdhController {
  @operation({
    summary: "Get Ndh",
  })
  @get()
  static getNdh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ndh",
  })
  @post("{id}")
  static createNdh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
