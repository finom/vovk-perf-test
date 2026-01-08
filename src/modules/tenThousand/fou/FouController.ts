import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fou")
export default class FouController {
  @operation({
    summary: "Get Fou",
  })
  @get()
  static getFou = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Fou",
  })
  @post("{id}")
  static createFou = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
