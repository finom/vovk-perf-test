import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nre")
export default class NreController {
  @operation({
    summary: "Get Nre",
  })
  @get()
  static getNre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nre",
  })
  @post("{id}")
  static createNre = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
