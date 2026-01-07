import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dne")
export default class DneController {
  @operation({
    summary: "Get Dne",
  })
  @get()
  static getDne = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dne",
  })
  @post("{id}")
  static createDne = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
