import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asc")
export default class AscController {
  @operation({
    summary: "Get Asc",
  })
  @get()
  static getAsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Asc",
  })
  @post("{id}")
  static createAsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
