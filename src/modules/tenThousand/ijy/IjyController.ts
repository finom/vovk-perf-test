import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ijy")
export default class IjyController {
  @operation({
    summary: "Get Ijy",
  })
  @get()
  static getIjy = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Ijy",
  })
  @post("{id}")
  static createIjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
    handle: (_req, { id }) => {
      return { post: true, id };
    },
  });
}
