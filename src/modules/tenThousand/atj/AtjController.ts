import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("atj")
export default class AtjController {
  @operation({
    summary: "Get Atj",
  })
  @get()
  static getAtj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Atj",
  })
  @post("{id}")
  static createAtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
