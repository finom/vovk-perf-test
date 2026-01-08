import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhx")
export default class DhxController {
  @operation({
    summary: "Get Dhx",
  })
  @get()
  static getDhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhx",
  })
  @post("{id}")
  static createDhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
