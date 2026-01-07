import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fcr")
export default class FcrController {
  @operation({
    summary: "Get Fcr",
  })
  @get()
  static getFcr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fcr",
  })
  @post("{id}")
  static createFcr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
