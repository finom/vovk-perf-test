import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcq")
export default class FcqController {
  @operation({
    summary: "Get Fcq",
  })
  @get()
  static getFcq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcq",
  })
  @post("{id}")
  static createFcq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
