import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gok")
export default class GokController {
  @operation({
    summary: "Get Gok",
  })
  @get()
  static getGok = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gok",
  })
  @post("{id}")
  static createGok = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
