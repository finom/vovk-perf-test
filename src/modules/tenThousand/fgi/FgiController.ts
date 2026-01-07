import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fgi")
export default class FgiController {
  @operation({
    summary: "Get Fgi",
  })
  @get()
  static getFgi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fgi",
  })
  @post("{id}")
  static createFgi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
