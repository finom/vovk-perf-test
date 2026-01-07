import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsd")
export default class DsdController {
  @operation({
    summary: "Get Dsd",
  })
  @get()
  static getDsd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsd",
  })
  @post("{id}")
  static createDsd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
