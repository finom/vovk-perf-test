import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aip")
export default class AipController {
  @operation({
    summary: "Get Aip",
  })
  @get()
  static getAip = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aip",
  })
  @post("{id}")
  static createAip = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
