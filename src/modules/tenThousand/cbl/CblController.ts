import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cbl")
export default class CblController {
  @operation({
    summary: "Get Cbl",
  })
  @get()
  static getCbl = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cbl",
  })
  @post("{id}")
  static createCbl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
