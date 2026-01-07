import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fsk")
export default class FskController {
  @operation({
    summary: "Get Fsk",
  })
  @get()
  static getFsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fsk",
  })
  @post("{id}")
  static createFsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
