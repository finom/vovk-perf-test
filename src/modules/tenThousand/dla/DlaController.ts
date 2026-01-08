import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dla")
export default class DlaController {
  @operation({
    summary: "Get Dla",
  })
  @get()
  static getDla = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dla",
  })
  @post("{id}")
  static createDla = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
