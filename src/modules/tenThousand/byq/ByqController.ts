import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byq")
export default class ByqController {
  @operation({
    summary: "Get Byq",
  })
  @get()
  static getByq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byq",
  })
  @post("{id}")
  static createByq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
