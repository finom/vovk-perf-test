import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("feg")
export default class FegController {
  @operation({
    summary: "Get Feg",
  })
  @get()
  static getFeg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Feg",
  })
  @post("{id}")
  static createFeg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
