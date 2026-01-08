import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hre")
export default class HreController {
  @operation({
    summary: "Get Hre",
  })
  @get()
  static getHre = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hre",
  })
  @post("{id}")
  static createHre = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
