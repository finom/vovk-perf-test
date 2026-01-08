import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dhe")
export default class DheController {
  @operation({
    summary: "Get Dhe",
  })
  @get()
  static getDhe = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Dhe",
  })
  @post("{id}")
  static createDhe = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
