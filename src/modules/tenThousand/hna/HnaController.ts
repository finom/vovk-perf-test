import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hna")
export default class HnaController {
  @operation({
    summary: "Get Hna",
  })
  @get()
  static getHna = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hna",
  })
  @post("{id}")
  static createHna = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
