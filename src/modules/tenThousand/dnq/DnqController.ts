import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dnq")
export default class DnqController {
  @operation({
    summary: "Get Dnq",
  })
  @get()
  static getDnq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dnq",
  })
  @post("{id}")
  static createDnq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
