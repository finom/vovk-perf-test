import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hhe")
export default class HheController {
  @operation({
    summary: "Get Hhe",
  })
  @get()
  static getHhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hhe",
  })
  @post("{id}")
  static createHhe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
