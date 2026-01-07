import { procedure, prefix, get, post, operation } from "vovk";

@prefix("emf")
export default class EmfController {
  @operation({
    summary: "Get Emf",
  })
  @get()
  static getEmf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Emf",
  })
  @post("{id}")
  static createEmf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
