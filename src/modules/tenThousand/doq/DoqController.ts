import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doq")
export default class DoqController {
  @operation({
    summary: "Get Doq",
  })
  @get()
  static getDoq = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doq",
  })
  @post("{id}")
  static createDoq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
