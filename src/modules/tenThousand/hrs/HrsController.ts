import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hrs")
export default class HrsController {
  @operation({
    summary: "Get Hrs",
  })
  @get()
  static getHrs = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hrs",
  })
  @post("{id}")
  static createHrs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
