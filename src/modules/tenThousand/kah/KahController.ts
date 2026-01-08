import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kah")
export default class KahController {
  @operation({
    summary: "Get Kah",
  })
  @get()
  static getKah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kah",
  })
  @post("{id}")
  static createKah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
