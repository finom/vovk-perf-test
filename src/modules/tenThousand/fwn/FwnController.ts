import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwn")
export default class FwnController {
  @operation({
    summary: "Get Fwn",
  })
  @get()
  static getFwn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwn",
  })
  @post("{id}")
  static createFwn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
