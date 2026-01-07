import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eca")
export default class EcaController {
  @operation({
    summary: "Get Eca",
  })
  @get()
  static getEca = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eca",
  })
  @post("{id}")
  static createEca = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
