import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bzj")
export default class BzjController {
  @operation({
    summary: "Get Bzj",
  })
  @get()
  static getBzj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bzj",
  })
  @post("{id}")
  static createBzj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
