import { procedure, prefix, get, post, operation } from "vovk";

@prefix("apf")
export default class ApfController {
  @operation({
    summary: "Get Apf",
  })
  @get()
  static getApf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Apf",
  })
  @post("{id}")
  static createApf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
