import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hah")
export default class HahController {
  @operation({
    summary: "Get Hah",
  })
  @get()
  static getHah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Hah",
  })
  @post("{id}")
  static createHah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
