import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ar")
export default class ArController {
  @operation({
    summary: "Get Ar",
  })
  @get()
  static getAr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ar",
  })
  @post("{id}")
  static createAr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
