import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ein")
export default class EinController {
  @operation({
    summary: "Get Ein",
  })
  @get()
  static getEin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ein",
  })
  @post("{id}")
  static createEin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
