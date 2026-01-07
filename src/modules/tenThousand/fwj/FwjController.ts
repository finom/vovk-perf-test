import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwj")
export default class FwjController {
  @operation({
    summary: "Get Fwj",
  })
  @get()
  static getFwj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwj",
  })
  @post("{id}")
  static createFwj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
