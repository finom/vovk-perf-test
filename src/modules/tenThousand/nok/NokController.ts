import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nok")
export default class NokController {
  @operation({
    summary: "Get Nok",
  })
  @get()
  static getNok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nok",
  })
  @post("{id}")
  static createNok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
