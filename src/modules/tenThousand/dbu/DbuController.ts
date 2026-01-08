import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dbu")
export default class DbuController {
  @operation({
    summary: "Get Dbu",
  })
  @get()
  static getDbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dbu",
  })
  @post("{id}")
  static createDbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
