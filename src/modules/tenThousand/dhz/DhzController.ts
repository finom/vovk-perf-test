import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhz")
export default class DhzController {
  @operation({
    summary: "Get Dhz",
  })
  @get()
  static getDhz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhz",
  })
  @post("{id}")
  static createDhz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
