import { procedure, prefix, get, post, operation } from "vovk";

@prefix("niv")
export default class NivController {
  @operation({
    summary: "Get Niv",
  })
  @get()
  static getNiv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Niv",
  })
  @post("{id}")
  static createNiv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
