import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eey")
export default class EeyController {
  @operation({
    summary: "Get Eey",
  })
  @get()
  static getEey = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eey",
  })
  @post("{id}")
  static createEey = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
