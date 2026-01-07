import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cja")
export default class CjaController {
  @operation({
    summary: "Get Cja",
  })
  @get()
  static getCja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cja",
  })
  @post("{id}")
  static createCja = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
