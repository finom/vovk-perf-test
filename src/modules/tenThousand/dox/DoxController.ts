import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dox")
export default class DoxController {
  @operation({
    summary: "Get Dox",
  })
  @get()
  static getDox = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dox",
  })
  @post("{id}")
  static createDox = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
