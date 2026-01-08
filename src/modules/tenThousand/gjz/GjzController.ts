import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjz")
export default class GjzController {
  @operation({
    summary: "Get Gjz",
  })
  @get()
  static getGjz = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjz",
  })
  @post("{id}")
  static createGjz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
