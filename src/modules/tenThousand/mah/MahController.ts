import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mah")
export default class MahController {
  @operation({
    summary: "Get Mah",
  })
  @get()
  static getMah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Mah",
  })
  @post("{id}")
  static createMah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
