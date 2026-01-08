import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ed")
export default class EdController {
  @operation({
    summary: "Get Ed",
  })
  @get()
  static getEd = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ed",
  })
  @post("{id}")
  static createEd = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
