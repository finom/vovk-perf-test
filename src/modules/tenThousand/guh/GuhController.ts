import { procedure, prefix, get, post, operation } from "vovk";

@prefix("guh")
export default class GuhController {
  @operation({
    summary: "Get Guh",
  })
  @get()
  static getGuh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Guh",
  })
  @post("{id}")
  static createGuh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
