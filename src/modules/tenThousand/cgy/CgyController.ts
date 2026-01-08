import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("cgy")
export default class CgyController {
  @operation({
    summary: "Get Cgy",
  })
  @get()
  static getCgy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Cgy",
  })
  @post("{id}")
  static createCgy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
