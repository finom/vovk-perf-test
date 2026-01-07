import { procedure, prefix, get, post, operation } from "vovk";

@prefix("jmp")
export default class JmpController {
  @operation({
    summary: "Get Jmp",
  })
  @get()
  static getJmp = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Jmp",
  })
  @post("{id}")
  static createJmp = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
