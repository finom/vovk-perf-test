import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hep")
export default class HepController {
  @operation({
    summary: "Get Hep",
  })
  @get()
  static getHep = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hep",
  })
  @post("{id}")
  static createHep = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
