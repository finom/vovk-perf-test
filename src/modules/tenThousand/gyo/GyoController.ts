import { procedure, prefix, get, post, operation } from "vovk";

@prefix("gyo")
export default class GyoController {
  @operation({
    summary: "Get Gyo",
  })
  @get()
  static getGyo = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Gyo",
  })
  @post("{id}")
  static createGyo = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
