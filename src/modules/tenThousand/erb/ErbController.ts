import { procedure, prefix, get, post, operation } from "vovk";

@prefix("erb")
export default class ErbController {
  @operation({
    summary: "Get Erb",
  })
  @get()
  static getErb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Erb",
  })
  @post("{id}")
  static createErb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
