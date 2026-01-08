import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fvi")
export default class FviController {
  @operation({
    summary: "Get Fvi",
  })
  @get()
  static getFvi = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fvi",
  })
  @post("{id}")
  static createFvi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
