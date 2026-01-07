import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ra")
export default class RaController {
  @operation({
    summary: "Get Ra",
  })
  @get()
  static getRa = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ra",
  })
  @post("{id}")
  static createRa = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
