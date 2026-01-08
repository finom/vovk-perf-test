import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gtu")
export default class GtuController {
  @operation({
    summary: "Get Gtu",
  })
  @get()
  static getGtu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gtu",
  })
  @post("{id}")
  static createGtu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
