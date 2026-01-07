import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idt")
export default class IdtController {
  @operation({
    summary: "Get Idt",
  })
  @get()
  static getIdt = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Idt",
  })
  @post("{id}")
  static createIdt = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
