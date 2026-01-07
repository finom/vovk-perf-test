import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idl")
export default class IdlController {
  @operation({
    summary: "Get Idl",
  })
  @get()
  static getIdl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idl",
  })
  @post("{id}")
  static createIdl = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
