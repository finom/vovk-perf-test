import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("flf")
export default class FlfController {
  @operation({
    summary: "Get Flf",
  })
  @get()
  static getFlf = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Flf",
  })
  @post("{id}")
  static createFlf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
