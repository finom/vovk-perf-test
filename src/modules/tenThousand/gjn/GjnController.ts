import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjn")
export default class GjnController {
  @operation({
    summary: "Get Gjn",
  })
  @get()
  static getGjn = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjn",
  })
  @post("{id}")
  static createGjn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
