import { procedure, prefix, get, post, operation } from "vovk";

@prefix("kym")
export default class KymController {
  @operation({
    summary: "Get Kym",
  })
  @get()
  static getKym = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kym",
  })
  @post("{id}")
  static createKym = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
