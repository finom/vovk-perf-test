import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hr")
export default class HrController {
  @operation({
    summary: "Get Hr",
  })
  @get()
  static getHr = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hr",
  })
  @post("{id}")
  static createHr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
