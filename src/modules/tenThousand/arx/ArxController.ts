import { procedure, prefix, get, post, operation } from "vovk";

@prefix("arx")
export default class ArxController {
  @operation({
    summary: "Get Arx",
  })
  @get()
  static getArx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Arx",
  })
  @post("{id}")
  static createArx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
