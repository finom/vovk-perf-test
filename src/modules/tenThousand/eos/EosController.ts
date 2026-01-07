import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eos")
export default class EosController {
  @operation({
    summary: "Get Eos",
  })
  @get()
  static getEos = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eos",
  })
  @post("{id}")
  static createEos = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
