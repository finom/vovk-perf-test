import { procedure, prefix, get, post, operation } from "vovk";

@prefix("duz")
export default class DuzController {
  @operation({
    summary: "Get Duz",
  })
  @get()
  static getDuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Duz",
  })
  @post("{id}")
  static createDuz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
