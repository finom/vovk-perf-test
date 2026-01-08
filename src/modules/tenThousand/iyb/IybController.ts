import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iyb")
export default class IybController {
  @operation({
    summary: "Get Iyb",
  })
  @get()
  static getIyb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Iyb",
  })
  @post("{id}")
  static createIyb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
