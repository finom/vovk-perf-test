import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kjr")
export default class KjrController {
  @operation({
    summary: "Get Kjr",
  })
  @get()
  static getKjr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjr",
  })
  @post("{id}")
  static createKjr = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
