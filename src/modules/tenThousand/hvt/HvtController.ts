import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hvt")
export default class HvtController {
  @operation({
    summary: "Get Hvt",
  })
  @get()
  static getHvt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvt",
  })
  @post("{id}")
  static createHvt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
