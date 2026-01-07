import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kig")
export default class KigController {
  @operation({
    summary: "Get Kig",
  })
  @get()
  static getKig = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kig",
  })
  @post("{id}")
  static createKig = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
