import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dja")
export default class DjaController {
  @operation({
    summary: "Get Dja",
  })
  @get()
  static getDja = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dja",
  })
  @post("{id}")
  static createDja = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
