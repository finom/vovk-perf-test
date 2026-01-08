import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kuz")
export default class KuzController {
  @operation({
    summary: "Get Kuz",
  })
  @get()
  static getKuz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kuz",
  })
  @post("{id}")
  static createKuz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
