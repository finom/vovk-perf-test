import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kbu")
export default class KbuController {
  @operation({
    summary: "Get Kbu",
  })
  @get()
  static getKbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kbu",
  })
  @post("{id}")
  static createKbu = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
