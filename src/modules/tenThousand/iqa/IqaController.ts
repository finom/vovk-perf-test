import { procedure, prefix, get, post, operation } from "vovk";

@prefix("iqa")
export default class IqaController {
  @operation({
    summary: "Get Iqa",
  })
  @get()
  static getIqa = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Iqa",
  })
  @post("{id}")
  static createIqa = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
