import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aah")
export default class AahController {
  @operation({
    summary: "Get Aah",
  })
  @get()
  static getAah = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Aah",
  })
  @post("{id}")
  static createAah = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
