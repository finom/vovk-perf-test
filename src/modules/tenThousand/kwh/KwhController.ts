import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kwh")
export default class KwhController {
  @operation({
    summary: "Get Kwh",
  })
  @get()
  static getKwh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kwh",
  })
  @post("{id}")
  static createKwh = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
