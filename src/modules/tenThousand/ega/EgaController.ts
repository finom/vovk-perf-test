import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ega")
export default class EgaController {
  @operation({
    summary: "Get Ega",
  })
  @get()
  static getEga = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ega",
  })
  @post("{id}")
  static createEga = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
