import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjx")
export default class KjxController {
  @operation({
    summary: "Get Kjx",
  })
  @get()
  static getKjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Kjx",
  })
  @post("{id}")
  static createKjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
