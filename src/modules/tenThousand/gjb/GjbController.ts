import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gjb")
export default class GjbController {
  @operation({
    summary: "Get Gjb",
  })
  @get()
  static getGjb = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Gjb",
  })
  @post("{id}")
  static createGjb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
