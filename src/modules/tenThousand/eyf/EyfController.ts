import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyf")
export default class EyfController {
  @operation({
    summary: "Get Eyf",
  })
  @get()
  static getEyf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyf",
  })
  @post("{id}")
  static createEyf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
