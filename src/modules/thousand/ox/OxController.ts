import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ox")
export default class OxController {
  @operation({
    summary: "Get Ox",
  })
  @get()
  static getOx = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ox",
  })
  @post("{id}")
  static createOx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
