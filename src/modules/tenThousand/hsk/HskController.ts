import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hsk")
export default class HskController {
  @operation({
    summary: "Get Hsk",
  })
  @get()
  static getHsk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hsk",
  })
  @post("{id}")
  static createHsk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
