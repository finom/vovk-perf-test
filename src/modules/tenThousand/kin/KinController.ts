import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kin")
export default class KinController {
  @operation({
    summary: "Get Kin",
  })
  @get()
  static getKin = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kin",
  })
  @post("{id}")
  static createKin = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
