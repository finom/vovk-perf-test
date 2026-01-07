import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ezo")
export default class EzoController {
  @operation({
    summary: "Get Ezo",
  })
  @get()
  static getEzo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ezo",
  })
  @post("{id}")
  static createEzo = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
