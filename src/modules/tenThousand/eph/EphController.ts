import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eph")
export default class EphController {
  @operation({
    summary: "Get Eph",
  })
  @get()
  static getEph = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eph",
  })
  @post("{id}")
  static createEph = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
