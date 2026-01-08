import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("doh")
export default class DohController {
  @operation({
    summary: "Get Doh",
  })
  @get()
  static getDoh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Doh",
  })
  @post("{id}")
  static createDoh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
