import { procedure, prefix, get, post, operation } from "vovk";

@prefix("hba")
export default class HbaController {
  @operation({
    summary: "Get Hba",
  })
  @get()
  static getHba = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hba",
  })
  @post("{id}")
  static createHba = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
