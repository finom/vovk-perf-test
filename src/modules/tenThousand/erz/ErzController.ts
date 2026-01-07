import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erz")
export default class ErzController {
  @operation({
    summary: "Get Erz",
  })
  @get()
  static getErz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erz",
  })
  @post("{id}")
  static createErz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
