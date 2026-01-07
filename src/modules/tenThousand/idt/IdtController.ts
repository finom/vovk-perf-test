import { procedure, prefix, get, post, operation } from "vovk";

@prefix("idt")
export default class IdtController {
  @operation({
    summary: "Get Idt",
  })
  @get()
  static getIdt = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Idt",
  })
  @post("{id}")
  static createIdt = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
