import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhj")
export default class BhjController {
  @operation({
    summary: "Get Bhj",
  })
  @get()
  static getBhj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhj",
  })
  @post("{id}")
  static createBhj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
