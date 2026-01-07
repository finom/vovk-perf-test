import { procedure, prefix, get, post, operation } from "vovk";

@prefix("mil")
export default class MilController {
  @operation({
    summary: "Get Mil",
  })
  @get()
  static getMil = procedure({
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
