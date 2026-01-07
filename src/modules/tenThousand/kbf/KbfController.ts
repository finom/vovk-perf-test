import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbf")
export default class KbfController {
  @operation({
    summary: "Get Kbf",
  })
  @get()
  static getKbf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbf",
  })
  @post("{id}")
  static createKbf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
