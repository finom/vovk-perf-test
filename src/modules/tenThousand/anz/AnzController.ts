import { procedure, prefix, get, post, operation } from "vovk";

@prefix("anz")
export default class AnzController {
  @operation({
    summary: "Get Anz",
  })
  @get()
  static getAnz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Anz",
  })
  @post("{id}")
  static createAnz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
