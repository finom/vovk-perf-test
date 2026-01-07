import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khr")
export default class KhrController {
  @operation({
    summary: "Get Khr",
  })
  @get()
  static getKhr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khr",
  })
  @post("{id}")
  static createKhr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
