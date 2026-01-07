import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emi")
export default class EmiController {
  @operation({
    summary: "Get Emi",
  })
  @get()
  static getEmi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emi",
  })
  @post("{id}")
  static createEmi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
