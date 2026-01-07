import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nay")
export default class NayController {
  @operation({
    summary: "Get Nay",
  })
  @get()
  static getNay = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nay",
  })
  @post("{id}")
  static createNay = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
