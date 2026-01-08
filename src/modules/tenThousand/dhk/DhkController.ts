import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhk")
export default class DhkController {
  @operation({
    summary: "Get Dhk",
  })
  @get()
  static getDhk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhk",
  })
  @post("{id}")
  static createDhk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
