import { procedure, prefix, get, post, operation } from "vovk";

@prefix("daw")
export default class DawController {
  @operation({
    summary: "Get Daw",
  })
  @get()
  static getDaw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Daw",
  })
  @post("{id}")
  static createDaw = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
