import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nho")
export default class NhoController {
  @operation({
    summary: "Get Nho",
  })
  @get()
  static getNho = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nho",
  })
  @post("{id}")
  static createNho = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
