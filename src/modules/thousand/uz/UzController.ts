import { procedure, prefix, get, post, operation } from "vovk";

@prefix("uz")
export default class UzController {
  @operation({
    summary: "Get Uz",
  })
  @get()
  static getUz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uz",
  })
  @post("{id}")
  static createUz = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
