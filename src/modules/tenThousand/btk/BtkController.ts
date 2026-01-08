import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("btk")
export default class BtkController {
  @operation({
    summary: "Get Btk",
  })
  @get()
  static getBtk = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Btk",
  })
  @post("{id}")
  static createBtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
