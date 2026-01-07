import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nou")
export default class NouController {
  @operation({
    summary: "Get Nou",
  })
  @get()
  static getNou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nou",
  })
  @post("{id}")
  static createNou = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
