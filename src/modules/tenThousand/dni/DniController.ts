import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dni")
export default class DniController {
  @operation({
    summary: "Get Dni",
  })
  @get()
  static getDni = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dni",
  })
  @post("{id}")
  static createDni = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
