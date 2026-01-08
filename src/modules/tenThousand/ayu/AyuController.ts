import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ayu")
export default class AyuController {
  @operation({
    summary: "Get Ayu",
  })
  @get()
  static getAyu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ayu",
  })
  @post("{id}")
  static createAyu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
