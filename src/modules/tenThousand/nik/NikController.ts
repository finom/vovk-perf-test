import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nik")
export default class NikController {
  @operation({
    summary: "Get Nik",
  })
  @get()
  static getNik = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nik",
  })
  @post("{id}")
  static createNik = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
