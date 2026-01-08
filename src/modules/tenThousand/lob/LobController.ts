import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lob")
export default class LobController {
  @operation({
    summary: "Get Lob",
  })
  @get()
  static getLob = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lob",
  })
  @post("{id}")
  static createLob = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
