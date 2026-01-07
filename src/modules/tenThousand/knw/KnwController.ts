import { procedure, prefix, get, post, operation } from "vovk";

@prefix("knw")
export default class KnwController {
  @operation({
    summary: "Get Knw",
  })
  @get()
  static getKnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Knw",
  })
  @post("{id}")
  static createKnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
