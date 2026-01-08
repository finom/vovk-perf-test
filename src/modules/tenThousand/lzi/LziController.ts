import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lzi")
export default class LziController {
  @operation({
    summary: "Get Lzi",
  })
  @get()
  static getLzi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lzi",
  })
  @post("{id}")
  static createLzi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
