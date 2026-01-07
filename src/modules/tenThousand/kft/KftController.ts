import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kft")
export default class KftController {
  @operation({
    summary: "Get Kft",
  })
  @get()
  static getKft = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kft",
  })
  @post("{id}")
  static createKft = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
