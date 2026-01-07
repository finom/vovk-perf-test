import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alu")
export default class AluController {
  @operation({
    summary: "Get Alu",
  })
  @get()
  static getAlu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alu",
  })
  @post("{id}")
  static createAlu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
