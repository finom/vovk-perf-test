import { procedure, prefix, get, post, operation } from "vovk";

@prefix("frv")
export default class FrvController {
  @operation({
    summary: "Get Frv",
  })
  @get()
  static getFrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Frv",
  })
  @post("{id}")
  static createFrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
