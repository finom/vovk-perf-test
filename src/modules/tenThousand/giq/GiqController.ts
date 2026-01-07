import { procedure, prefix, get, post, operation } from "vovk";

@prefix("giq")
export default class GiqController {
  @operation({
    summary: "Get Giq",
  })
  @get()
  static getGiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Giq",
  })
  @post("{id}")
  static createGiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
