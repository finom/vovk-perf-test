import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niq")
export default class NiqController {
  @operation({
    summary: "Get Niq",
  })
  @get()
  static getNiq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niq",
  })
  @post("{id}")
  static createNiq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
