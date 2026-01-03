import { procedure, prefix, get, post, operation } from "vovk";

@prefix("meds")
export default class MedController {
  @operation({
    summary: "Get Meds",
  })
  @get()
  static getMeds = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Med",
  })
  @post("{id}")
  static createMed = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
