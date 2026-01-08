import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhb")
export default class DhbController {
  @operation({
    summary: "Get Dhb",
  })
  @get()
  static getDhb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhb",
  })
  @post("{id}")
  static createDhb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
