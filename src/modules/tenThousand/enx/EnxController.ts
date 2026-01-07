import { procedure, prefix, get, post, operation } from "vovk";

@prefix("enx")
export default class EnxController {
  @operation({
    summary: "Get Enx",
  })
  @get()
  static getEnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Enx",
  })
  @post("{id}")
  static createEnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
