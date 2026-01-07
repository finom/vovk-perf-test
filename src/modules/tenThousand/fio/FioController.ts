import { procedure, prefix, get, post, operation } from "vovk";

@prefix("fio")
export default class FioController {
  @operation({
    summary: "Get Fio",
  })
  @get()
  static getFio = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fio",
  })
  @post("{id}")
  static createFio = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
