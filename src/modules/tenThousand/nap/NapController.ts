import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nap")
export default class NapController {
  @operation({
    summary: "Get Nap",
  })
  @get()
  static getNap = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nap",
  })
  @post("{id}")
  static createNap = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
