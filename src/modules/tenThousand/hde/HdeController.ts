import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hde")
export default class HdeController {
  @operation({
    summary: "Get Hde",
  })
  @get()
  static getHde = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hde",
  })
  @post("{id}")
  static createHde = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
