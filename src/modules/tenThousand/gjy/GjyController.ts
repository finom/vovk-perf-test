import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjy")
export default class GjyController {
  @operation({
    summary: "Get Gjy",
  })
  @get()
  static getGjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjy",
  })
  @post("{id}")
  static createGjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
