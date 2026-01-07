import { procedure, prefix, get, post, operation } from "vovk";

@prefix("blc")
export default class BlcController {
  @operation({
    summary: "Get Blc",
  })
  @get()
  static getBlc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Blc",
  })
  @post("{id}")
  static createBlc = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
