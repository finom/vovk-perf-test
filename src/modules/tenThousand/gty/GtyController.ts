import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gty")
export default class GtyController {
  @operation({
    summary: "Get Gty",
  })
  @get()
  static getGty = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gty",
  })
  @post("{id}")
  static createGty = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
