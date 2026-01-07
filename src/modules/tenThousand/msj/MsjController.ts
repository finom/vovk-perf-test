import { procedure, prefix, get, post, operation } from "vovk";

@prefix("msj")
export default class MsjController {
  @operation({
    summary: "Get Msj",
  })
  @get()
  static getMsj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Msj",
  })
  @post("{id}")
  static createMsj = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
