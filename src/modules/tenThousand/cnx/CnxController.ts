import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cnx")
export default class CnxController {
  @operation({
    summary: "Get Cnx",
  })
  @get()
  static getCnx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cnx",
  })
  @post("{id}")
  static createCnx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
