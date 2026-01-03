import { procedure, prefix, get, post, operation } from "vovk";

@prefix("euzs")
export default class EuzController {
  @operation({
    summary: "Get Euzs",
  })
  @get()
  static getEuzs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Euz",
  })
  @post("{id}")
  static createEuz = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
