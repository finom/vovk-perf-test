import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ivj")
export default class IvjController {
  @operation({
    summary: "Get Ivj",
  })
  @get()
  static getIvj = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ivj",
  })
  @post("{id}")
  static createIvj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
