import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eok")
export default class EokController {
  @operation({
    summary: "Get Eok",
  })
  @get()
  static getEok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eok",
  })
  @post("{id}")
  static createEok = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
