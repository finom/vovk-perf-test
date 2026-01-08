import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("avh")
export default class AvhController {
  @operation({
    summary: "Get Avh",
  })
  @get()
  static getAvh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Avh",
  })
  @post("{id}")
  static createAvh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
