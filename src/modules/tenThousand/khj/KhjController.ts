import { procedure, prefix, get, post, operation } from "vovk";

@prefix("khj")
export default class KhjController {
  @operation({
    summary: "Get Khj",
  })
  @get()
  static getKhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Khj",
  })
  @post("{id}")
  static createKhj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
