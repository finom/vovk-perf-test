import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dsk")
export default class DskController {
  @operation({
    summary: "Get Dsk",
  })
  @get()
  static getDsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsk",
  })
  @post("{id}")
  static createDsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
