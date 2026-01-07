import { procedure, prefix, get, post, operation } from "vovk";

@prefix("beh")
export default class BehController {
  @operation({
    summary: "Get Beh",
  })
  @get()
  static getBeh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Beh",
  })
  @post("{id}")
  static createBeh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
