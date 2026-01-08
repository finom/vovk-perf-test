import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dsc")
export default class DscController {
  @operation({
    summary: "Get Dsc",
  })
  @get()
  static getDsc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dsc",
  })
  @post("{id}")
  static createDsc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
