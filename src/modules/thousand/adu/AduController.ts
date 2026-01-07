import { procedure, prefix, get, post, operation } from "vovk";

@prefix("adu")
export default class AduController {
  @operation({
    summary: "Get Adu",
  })
  @get()
  static getAdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Adu",
  })
  @post("{id}")
  static createAdu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
