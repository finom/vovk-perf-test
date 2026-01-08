import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvw")
export default class HvwController {
  @operation({
    summary: "Get Hvw",
  })
  @get()
  static getHvw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvw",
  })
  @post("{id}")
  static createHvw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
