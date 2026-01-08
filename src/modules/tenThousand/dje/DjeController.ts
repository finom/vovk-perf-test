import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dje")
export default class DjeController {
  @operation({
    summary: "Get Dje",
  })
  @get()
  static getDje = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dje",
  })
  @post("{id}")
  static createDje = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
