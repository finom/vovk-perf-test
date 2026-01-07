import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nit")
export default class NitController {
  @operation({
    summary: "Get Nit",
  })
  @get()
  static getNit = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Nit",
  })
  @post("{id}")
  static createNit = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
