import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eus")
export default class EusController {
  @operation({
    summary: "Get Eus",
  })
  @get()
  static getEus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eus",
  })
  @post("{id}")
  static createEus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
