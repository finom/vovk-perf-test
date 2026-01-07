import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ebu")
export default class EbuController {
  @operation({
    summary: "Get Ebu",
  })
  @get()
  static getEbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ebu",
  })
  @post("{id}")
  static createEbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
