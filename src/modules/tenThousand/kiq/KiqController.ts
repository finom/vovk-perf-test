import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kiq")
export default class KiqController {
  @operation({
    summary: "Get Kiq",
  })
  @get()
  static getKiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kiq",
  })
  @post("{id}")
  static createKiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
