import { procedure, prefix, get, post, operation } from "vovk";

@prefix("epd")
export default class EpdController {
  @operation({
    summary: "Get Epd",
  })
  @get()
  static getEpd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Epd",
  })
  @post("{id}")
  static createEpd = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
