import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvu")
export default class LvuController {
  @operation({
    summary: "Get Lvu",
  })
  @get()
  static getLvu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lvu",
  })
  @post("{id}")
  static createLvu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
