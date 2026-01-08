import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eus")
export default class EusController {
  @operation({
    summary: "Get Eus",
  })
  @get()
  static getEus = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Eus",
  })
  @post("{id}")
  static createEus = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
