import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nr")
export default class NrController {
  @operation({
    summary: "Get Nr",
  })
  @get()
  static getNr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nr",
  })
  @post("{id}")
  static createNr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
