import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knj")
export default class KnjController {
  @operation({
    summary: "Get Knj",
  })
  @get()
  static getKnj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knj",
  })
  @post("{id}")
  static createKnj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
