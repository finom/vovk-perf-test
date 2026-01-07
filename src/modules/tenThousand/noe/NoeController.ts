import { procedure, prefix, get, post, operation } from "vovk";

@prefix("noe")
export default class NoeController {
  @operation({
    summary: "Get Noe",
  })
  @get()
  static getNoe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Noe",
  })
  @post("{id}")
  static createNoe = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
