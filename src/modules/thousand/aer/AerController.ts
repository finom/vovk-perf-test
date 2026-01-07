import { procedure, prefix, get, post, operation } from "vovk";

@prefix("aer")
export default class AerController {
  @operation({
    summary: "Get Aer",
  })
  @get()
  static getAer = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aer",
  })
  @post("{id}")
  static createAer = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
