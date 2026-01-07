import { procedure, prefix, get, post, operation } from "vovk";

@prefix("atf")
export default class AtfController {
  @operation({
    summary: "Get Atf",
  })
  @get()
  static getAtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atf",
  })
  @post("{id}")
  static createAtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
