import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cev")
export default class CevController {
  @operation({
    summary: "Get Cev",
  })
  @get()
  static getCev = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cev",
  })
  @post("{id}")
  static createCev = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
