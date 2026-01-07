import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eis")
export default class EisController {
  @operation({
    summary: "Get Eis",
  })
  @get()
  static getEis = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eis",
  })
  @post("{id}")
  static createEis = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
