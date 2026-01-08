import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flj")
export default class FljController {
  @operation({
    summary: "Get Flj",
  })
  @get()
  static getFlj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flj",
  })
  @post("{id}")
  static createFlj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
