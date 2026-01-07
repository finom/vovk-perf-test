import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cpx")
export default class CpxController {
  @operation({
    summary: "Get Cpx",
  })
  @get()
  static getCpx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cpx",
  })
  @post("{id}")
  static createCpx = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
