import { procedure, prefix, get, post, operation } from "vovk";

@prefix("bzv")
export default class BzvController {
  @operation({
    summary: "Get Bzv",
  })
  @get()
  static getBzv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzv",
  })
  @post("{id}")
  static createBzv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
