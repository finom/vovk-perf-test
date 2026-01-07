import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eci")
export default class EciController {
  @operation({
    summary: "Get Eci",
  })
  @get()
  static getEci = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eci",
  })
  @post("{id}")
  static createEci = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
