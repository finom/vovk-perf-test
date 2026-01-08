import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("caz")
export default class CazController {
  @operation({
    summary: "Get Caz",
  })
  @get()
  static getCaz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Caz",
  })
  @post("{id}")
  static createCaz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
