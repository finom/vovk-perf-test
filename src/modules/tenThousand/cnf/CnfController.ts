import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnf")
export default class CnfController {
  @operation({
    summary: "Get Cnf",
  })
  @get()
  static getCnf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnf",
  })
  @post("{id}")
  static createCnf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
