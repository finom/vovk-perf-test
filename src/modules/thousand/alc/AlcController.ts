import { procedure, prefix, get, post, operation } from "vovk";

@prefix("alc")
export default class AlcController {
  @operation({
    summary: "Get Alc",
  })
  @get()
  static getAlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Alc",
  })
  @post("{id}")
  static createAlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
