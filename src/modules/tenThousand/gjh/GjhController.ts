import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjh")
export default class GjhController {
  @operation({
    summary: "Get Gjh",
  })
  @get()
  static getGjh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjh",
  })
  @post("{id}")
  static createGjh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
