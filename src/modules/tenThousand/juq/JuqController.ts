import { procedure, prefix, get, post, operation } from "vovk";

@prefix("juq")
export default class JuqController {
  @operation({
    summary: "Get Juq",
  })
  @get()
  static getJuq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Juq",
  })
  @post("{id}")
  static createJuq = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
