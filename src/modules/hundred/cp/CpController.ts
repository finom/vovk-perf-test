import { procedure, prefix, get, post, operation } from "vovk";

@prefix("cp")
export default class CpController {
  @operation({
    summary: "Get Cp",
  })
  @get()
  static getCp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cp",
  })
  @post("{id}")
  static createCp = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
