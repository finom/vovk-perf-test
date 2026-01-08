import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("czg")
export default class CzgController {
  @operation({
    summary: "Get Czg",
  })
  @get()
  static getCzg = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Czg",
  })
  @post("{id}")
  static createCzg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
