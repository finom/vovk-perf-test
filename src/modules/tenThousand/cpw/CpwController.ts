import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpw")
export default class CpwController {
  @operation({
    summary: "Get Cpw",
  })
  @get()
  static getCpw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpw",
  })
  @post("{id}")
  static createCpw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
