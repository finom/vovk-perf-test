import { procedure, prefix, get, post, operation } from "vovk";

@prefix("moc")
export default class MocController {
  @operation({
    summary: "Get Moc",
  })
  @get()
  static getMoc = procedure({
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
