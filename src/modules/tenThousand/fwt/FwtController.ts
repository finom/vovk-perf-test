import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fwt")
export default class FwtController {
  @operation({
    summary: "Get Fwt",
  })
  @get()
  static getFwt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fwt",
  })
  @post("{id}")
  static createFwt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
