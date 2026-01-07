import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hpa")
export default class HpaController {
  @operation({
    summary: "Get Hpa",
  })
  @get()
  static getHpa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hpa",
  })
  @post("{id}")
  static createHpa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
