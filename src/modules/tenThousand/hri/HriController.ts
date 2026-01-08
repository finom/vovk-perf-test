import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hri")
export default class HriController {
  @operation({
    summary: "Get Hri",
  })
  @get()
  static getHri = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hri",
  })
  @post("{id}")
  static createHri = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
