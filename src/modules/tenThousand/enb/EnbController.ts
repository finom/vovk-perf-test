import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enb")
export default class EnbController {
  @operation({
    summary: "Get Enb",
  })
  @get()
  static getEnb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enb",
  })
  @post("{id}")
  static createEnb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
