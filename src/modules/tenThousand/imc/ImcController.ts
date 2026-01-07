import { procedure, prefix, get, post, operation } from "vovk";

@prefix("imc")
export default class ImcController {
  @operation({
    summary: "Get Imc",
  })
  @get()
  static getImc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Imc",
  })
  @post("{id}")
  static createImc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
