import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gov")
export default class GovController {
  @operation({
    summary: "Get Gov",
  })
  @get()
  static getGov = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gov",
  })
  @post("{id}")
  static createGov = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
