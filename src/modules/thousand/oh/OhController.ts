import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("oh")
export default class OhController {
  @operation({
    summary: "Get Oh",
  })
  @get()
  static getOh = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Oh",
  })
  @post("{id}")
  static createOh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
