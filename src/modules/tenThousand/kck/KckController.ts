import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kck")
export default class KckController {
  @operation({
    summary: "Get Kck",
  })
  @get()
  static getKck = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kck",
  })
  @post("{id}")
  static createKck = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
