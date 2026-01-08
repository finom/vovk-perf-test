import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ddo")
export default class DdoController {
  @operation({
    summary: "Get Ddo",
  })
  @get()
  static getDdo = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ddo",
  })
  @post("{id}")
  static createDdo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
