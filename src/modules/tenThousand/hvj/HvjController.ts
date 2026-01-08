import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hvj")
export default class HvjController {
  @operation({
    summary: "Get Hvj",
  })
  @get()
  static getHvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hvj",
  })
  @post("{id}")
  static createHvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
