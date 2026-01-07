import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eri")
export default class EriController {
  @operation({
    summary: "Get Eri",
  })
  @get()
  static getEri = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eri",
  })
  @post("{id}")
  static createEri = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
