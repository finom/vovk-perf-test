import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fhi")
export default class FhiController {
  @operation({
    summary: "Get Fhi",
  })
  @get()
  static getFhi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fhi",
  })
  @post("{id}")
  static createFhi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
