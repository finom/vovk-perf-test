import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhm")
export default class DhmController {
  @operation({
    summary: "Get Dhm",
  })
  @get()
  static getDhm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhm",
  })
  @post("{id}")
  static createDhm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
