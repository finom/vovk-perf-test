import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bec")
export default class BecController {
  @operation({
    summary: "Get Bec",
  })
  @get()
  static getBec = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bec",
  })
  @post("{id}")
  static createBec = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
