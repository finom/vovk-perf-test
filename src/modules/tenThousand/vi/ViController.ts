import { procedure, prefix, get, post, operation } from "vovk";

@prefix("vi")
export default class ViController {
  @operation({
    summary: "Get Vi",
  })
  @get()
  static getVi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Vi",
  })
  @post("{id}")
  static createVi = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
