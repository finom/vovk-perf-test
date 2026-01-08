import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("bhx")
export default class BhxController {
  @operation({
    summary: "Get Bhx",
  })
  @get()
  static getBhx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Bhx",
  })
  @post("{id}")
  static createBhx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
