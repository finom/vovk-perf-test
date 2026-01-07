import { procedure, prefix, get, post, operation } from "vovk";

@prefix("ctf")
export default class CtfController {
  @operation({
    summary: "Get Ctf",
  })
  @get()
  static getCtf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ctf",
  })
  @post("{id}")
  static createCtf = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
