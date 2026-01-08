import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byy")
export default class ByyController {
  @operation({
    summary: "Get Byy",
  })
  @get()
  static getByy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byy",
  })
  @post("{id}")
  static createByy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
