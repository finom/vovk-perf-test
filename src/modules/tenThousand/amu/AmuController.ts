import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("amu")
export default class AmuController {
  @operation({
    summary: "Get Amu",
  })
  @get()
  static getAmu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Amu",
  })
  @post("{id}")
  static createAmu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
