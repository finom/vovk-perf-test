import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eyb")
export default class EybController {
  @operation({
    summary: "Get Eyb",
  })
  @get()
  static getEyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eyb",
  })
  @post("{id}")
  static createEyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
