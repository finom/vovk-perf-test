import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lpj")
export default class LpjController {
  @operation({
    summary: "Get Lpj",
  })
  @get()
  static getLpj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Lpj",
  })
  @post("{id}")
  static createLpj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
