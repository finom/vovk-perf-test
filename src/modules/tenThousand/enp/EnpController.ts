import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enp")
export default class EnpController {
  @operation({
    summary: "Get Enp",
  })
  @get()
  static getEnp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enp",
  })
  @post("{id}")
  static createEnp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
