import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("uc")
export default class UcController {
  @operation({
    summary: "Get Uc",
  })
  @get()
  static getUc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Uc",
  })
  @post("{id}")
  static createUc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
