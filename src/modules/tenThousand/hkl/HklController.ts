import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hkl")
export default class HklController {
  @operation({
    summary: "Get Hkl",
  })
  @get()
  static getHkl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hkl",
  })
  @post("{id}")
  static createHkl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
