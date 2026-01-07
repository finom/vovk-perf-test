import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ems")
export default class EmsController {
  @operation({
    summary: "Get Ems",
  })
  @get()
  static getEms = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ems",
  })
  @post("{id}")
  static createEms = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
