import { procedure, prefix, get, post, operation } from "vovk";

@prefix("med")
export default class MedController {
  @operation({
    summary: "Get Med",
  })
  @get()
  static getMed = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Med",
  })
  @post("{id}")
  static createMed = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
