import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("inm")
export default class InmController {
  @operation({
    summary: "Get Inm",
  })
  @get()
  static getInm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Inm",
  })
  @post("{id}")
  static createInm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
