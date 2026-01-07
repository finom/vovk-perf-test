import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dia")
export default class DiaController {
  @operation({
    summary: "Get Dia",
  })
  @get()
  static getDia = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dia",
  })
  @post("{id}")
  static createDia = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
