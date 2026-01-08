import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqm")
export default class AqmController {
  @operation({
    summary: "Get Aqm",
  })
  @get()
  static getAqm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aqm",
  })
  @post("{id}")
  static createAqm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
