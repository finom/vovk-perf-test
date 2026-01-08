import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gfc")
export default class GfcController {
  @operation({
    summary: "Get Gfc",
  })
  @get()
  static getGfc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gfc",
  })
  @post("{id}")
  static createGfc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
