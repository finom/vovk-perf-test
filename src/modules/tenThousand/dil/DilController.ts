import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dil")
export default class DilController {
  @operation({
    summary: "Get Dil",
  })
  @get()
  static getDil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dil",
  })
  @post("{id}")
  static createDil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
