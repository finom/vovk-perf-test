import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idg")
export default class IdgController {
  @operation({
    summary: "Get Idg",
  })
  @get()
  static getIdg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idg",
  })
  @post("{id}")
  static createIdg = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
