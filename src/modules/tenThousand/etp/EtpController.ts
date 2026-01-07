import { procedure, prefix, get, post, operation } from "vovk";

@prefix("etp")
export default class EtpController {
  @operation({
    summary: "Get Etp",
  })
  @get()
  static getEtp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Etp",
  })
  @post("{id}")
  static createEtp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
