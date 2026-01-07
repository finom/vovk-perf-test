import { procedure, prefix, get, post, operation } from "vovk";

@prefix("eze")
export default class EzeController {
  @operation({
    summary: "Get Eze",
  })
  @get()
  static getEze = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Eze",
  })
  @post("{id}")
  static createEze = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
