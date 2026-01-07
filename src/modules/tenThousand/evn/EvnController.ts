import { procedure, prefix, get, post, operation } from "vovk";

@prefix("evn")
export default class EvnController {
  @operation({
    summary: "Get Evn",
  })
  @get()
  static getEvn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Evn",
  })
  @post("{id}")
  static createEvn = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
