import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kog")
export default class KogController {
  @operation({
    summary: "Get Kog",
  })
  @get()
  static getKog = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kog",
  })
  @post("{id}")
  static createKog = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
