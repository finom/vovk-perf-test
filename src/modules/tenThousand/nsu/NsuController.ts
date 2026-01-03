import { procedure, prefix, get, post, operation } from "vovk";

@prefix("nsus")
export default class NsuController {
  @operation({
    summary: "Get Nsus",
  })
  @get()
  static getNsus = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Nsu",
  })
  @post("{id}")
  static createNsu = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
