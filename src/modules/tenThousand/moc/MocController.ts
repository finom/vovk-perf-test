import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mocs")
export default class MocController {
  @operation({
    summary: "Get Mocs",
  })
  @get()
  static getMocs = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Moc",
  })
  @post("{id}")
  static createMoc = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
