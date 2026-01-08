import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("deb")
export default class DebController {
  @operation({
    summary: "Get Deb",
  })
  @get()
  static getDeb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Deb",
  })
  @post("{id}")
  static createDeb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
