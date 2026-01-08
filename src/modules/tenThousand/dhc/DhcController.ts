import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhc")
export default class DhcController {
  @operation({
    summary: "Get Dhc",
  })
  @get()
  static getDhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhc",
  })
  @post("{id}")
  static createDhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
