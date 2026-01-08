import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fet")
export default class FetController {
  @operation({
    summary: "Get Fet",
  })
  @get()
  static getFet = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fet",
  })
  @post("{id}")
  static createFet = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
