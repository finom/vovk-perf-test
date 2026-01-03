import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mils")
export default class MilController {
  @operation({
    summary: "Get Mils",
  })
  @get()
  static getMils = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Mil",
  })
  @post("{id}")
  static createMil = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
