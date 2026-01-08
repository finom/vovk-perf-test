import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ala")
export default class AlaController {
  @operation({
    summary: "Get Ala",
  })
  @get()
  static getAla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ala",
  })
  @post("{id}")
  static createAla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
