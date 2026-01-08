import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hbu")
export default class HbuController {
  @operation({
    summary: "Get Hbu",
  })
  @get()
  static getHbu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hbu",
  })
  @post("{id}")
  static createHbu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
