import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kyb")
export default class KybController {
  @operation({
    summary: "Get Kyb",
  })
  @get()
  static getKyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kyb",
  })
  @post("{id}")
  static createKyb = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
