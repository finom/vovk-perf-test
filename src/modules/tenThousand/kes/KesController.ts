import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kes")
export default class KesController {
  @operation({
    summary: "Get Kes",
  })
  @get()
  static getKes = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kes",
  })
  @post("{id}")
  static createKes = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
