import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhc")
export default class BhcController {
  @operation({
    summary: "Get Bhc",
  })
  @get()
  static getBhc = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhc",
  })
  @post("{id}")
  static createBhc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
