import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjp")
export default class GjpController {
  @operation({
    summary: "Get Gjp",
  })
  @get()
  static getGjp = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjp",
  })
  @post("{id}")
  static createGjp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
