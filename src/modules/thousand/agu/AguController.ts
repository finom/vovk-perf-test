import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("agu")
export default class AguController {
  @operation({
    summary: "Get Agu",
  })
  @get()
  static getAgu = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Agu",
  })
  @post("{id}")
  static createAgu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
