import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("byx")
export default class ByxController {
  @operation({
    summary: "Get Byx",
  })
  @get()
  static getByx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Byx",
  })
  @post("{id}")
  static createByx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
