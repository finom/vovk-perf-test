import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdu")
export default class HduController {
  @operation({
    summary: "Get Hdu",
  })
  @get()
  static getHdu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hdu",
  })
  @post("{id}")
  static createHdu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
