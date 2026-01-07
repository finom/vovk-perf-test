import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kze")
export default class KzeController {
  @operation({
    summary: "Get Kze",
  })
  @get()
  static getKze = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kze",
  })
  @post("{id}")
  static createKze = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
