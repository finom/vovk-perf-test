import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjm")
export default class GjmController {
  @operation({
    summary: "Get Gjm",
  })
  @get()
  static getGjm = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjm",
  })
  @post("{id}")
  static createGjm = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
