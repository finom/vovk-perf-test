import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjx")
export default class GjxController {
  @operation({
    summary: "Get Gjx",
  })
  @get()
  static getGjx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjx",
  })
  @post("{id}")
  static createGjx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
