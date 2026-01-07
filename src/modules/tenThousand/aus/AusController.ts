import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aus")
export default class AusController {
  @operation({
    summary: "Get Aus",
  })
  @get()
  static getAus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aus",
  })
  @post("{id}")
  static createAus = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
