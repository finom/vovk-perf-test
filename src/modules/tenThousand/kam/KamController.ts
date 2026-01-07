import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kam")
export default class KamController {
  @operation({
    summary: "Get Kam",
  })
  @get()
  static getKam = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kam",
  })
  @post("{id}")
  static createKam = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
