import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gqr")
export default class GqrController {
  @operation({
    summary: "Get Gqr",
  })
  @get()
  static getGqr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gqr",
  })
  @post("{id}")
  static createGqr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
