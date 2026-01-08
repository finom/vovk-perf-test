import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fiw")
export default class FiwController {
  @operation({
    summary: "Get Fiw",
  })
  @get()
  static getFiw = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fiw",
  })
  @post("{id}")
  static createFiw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
