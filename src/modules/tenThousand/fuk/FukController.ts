import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fuk")
export default class FukController {
  @operation({
    summary: "Get Fuk",
  })
  @get()
  static getFuk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fuk",
  })
  @post("{id}")
  static createFuk = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
