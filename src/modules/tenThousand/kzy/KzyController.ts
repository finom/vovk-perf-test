import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzy")
export default class KzyController {
  @operation({
    summary: "Get Kzy",
  })
  @get()
  static getKzy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kzy",
  })
  @post("{id}")
  static createKzy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
