import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnq")
export default class CnqController {
  @operation({
    summary: "Get Cnq",
  })
  @get()
  static getCnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnq",
  })
  @post("{id}")
  static createCnq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
