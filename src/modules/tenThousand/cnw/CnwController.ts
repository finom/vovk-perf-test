import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnw")
export default class CnwController {
  @operation({
    summary: "Get Cnw",
  })
  @get()
  static getCnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnw",
  })
  @post("{id}")
  static createCnw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
