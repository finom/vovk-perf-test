import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fru")
export default class FruController {
  @operation({
    summary: "Get Fru",
  })
  @get()
  static getFru = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fru",
  })
  @post("{id}")
  static createFru = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
