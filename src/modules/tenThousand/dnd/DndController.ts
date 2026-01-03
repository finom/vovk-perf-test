import { procedure, prefix, get, post, operation } from "vovk";

@prefix("dnds")
export default class DndController {
  @operation({
    summary: "Get Dnds",
  })
  @get()
  static getDnds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Dnd",
  })
  @post("{id}")
  static createDnd = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
