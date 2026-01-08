import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eg")
export default class EgController {
  @operation({
    summary: "Get Eg",
  })
  @get()
  static getEg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eg",
  })
  @post("{id}")
  static createEg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
