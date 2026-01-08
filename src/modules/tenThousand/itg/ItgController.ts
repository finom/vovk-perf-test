import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itg")
export default class ItgController {
  @operation({
    summary: "Get Itg",
  })
  @get()
  static getItg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Itg",
  })
  @post("{id}")
  static createItg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
