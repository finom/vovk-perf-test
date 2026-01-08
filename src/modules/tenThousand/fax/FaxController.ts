import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fax")
export default class FaxController {
  @operation({
    summary: "Get Fax",
  })
  @get()
  static getFax = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fax",
  })
  @post("{id}")
  static createFax = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
