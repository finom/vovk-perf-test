import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ewh")
export default class EwhController {
  @operation({
    summary: "Get Ewh",
  })
  @get()
  static getEwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ewh",
  })
  @post("{id}")
  static createEwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
