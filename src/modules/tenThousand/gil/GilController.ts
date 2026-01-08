import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gil")
export default class GilController {
  @operation({
    summary: "Get Gil",
  })
  @get()
  static getGil = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gil",
  })
  @post("{id}")
  static createGil = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
