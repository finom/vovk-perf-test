import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nht")
export default class NhtController {
  @operation({
    summary: "Get Nht",
  })
  @get()
  static getNht = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nht",
  })
  @post("{id}")
  static createNht = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
