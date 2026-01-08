import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnw")
export default class DnwController {
  @operation({
    summary: "Get Dnw",
  })
  @get()
  static getDnw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnw",
  })
  @post("{id}")
  static createDnw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
