import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aki")
export default class AkiController {
  @operation({
    summary: "Get Aki",
  })
  @get()
  static getAki = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aki",
  })
  @post("{id}")
  static createAki = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
