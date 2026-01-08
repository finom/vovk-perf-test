import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ihx")
export default class IhxController {
  @operation({
    summary: "Get Ihx",
  })
  @get()
  static getIhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ihx",
  })
  @post("{id}")
  static createIhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
